import Router from "./shared/Router";
import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      {/* react-toastify 적용 */}
      <ToastContainer
        position="top-center" // 알람 위치 지정
        autoClose={2000} // 자동 off 시간
        hideProgressBar={false} // 진행시간바 숨김
        closeOnClick // 클릭으로 알람 닫기
        rtl={false} // 알림 좌우 반전
        pauseOnFocusLoss // 화면을 벗어나면 알람 정지
        draggable // 드래그 가능
        pauseOnHover // 마우스를 올리면 알람 정지
        theme="dark"
        // limit={1} // 알람 개수 제한
        toastStyle={{
          fontFamily: "Black Han Sans, serif",
          fontSize: "18px",
          textAlign: "center",
          minWidth: "350px",
          padding: "30px",
        }}
      />
      <Router />
    </>
  );
}

export default App;
