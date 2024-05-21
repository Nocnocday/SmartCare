import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";

const withLayout = (WrappedComponent, heading, type, fnHeader) => {
  return function LayoutComponent(props) {
    const account = useSelector((state) => state.account);
    const navigate = useNavigate();
    const location = useLocation();

    useLayoutEffect(() => {
      if (!account?.role) {
        navigate("/");
      }
    }, [account, navigate]);
    const handleGoBack = () => {
      navigate(-1); // Điều hướng về trang trước đó
    };

    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f8f8f8',
        padding: '20px',
      },
      title: {
        fontSize: '2em',
        marginBottom: '20px',
      },
      message: {
        fontSize: '1.2em',
        marginBottom: '20px',
      },
      button: {
        padding: '10px 20px',
        fontSize: '1em',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      },
    };

    const permission = location.pathname.split("/")?.[1] === account?.role?.[0];

    return (
      <>
        {permission ? (
          <div className="flex h-full">
            <div className="section-left basis-[280px] relative">
              <Sidebar account={account} />
            </div>
            <div className="section-right flex-1 p-[20px]">
              <div className="header">
                <Header heading={heading} type={type} fnHeader={fnHeader} />
              </div>
              <div className="content mt-[10px]">
                <WrappedComponent {...props} />
              </div>
            </div>
          </div>
        ) : (
          <div className="access-denied-container" style={styles.container}>
          <h1 style={styles.title}>403 - Bạn không có quyền truy cập trang này</h1>
          <p style={styles.message}>Xin lỗi, bạn không có quyền truy cập trang này. Vui lòng liên hệ với quản trị viên nếu bạn nghĩ rằng đây là một sự nhầm lẫn.</p>
          <button onClick={handleGoBack} style={styles.button}>Quay lại</button>
        </div>
        )}
      </>
    );
  };
};

export default withLayout;
