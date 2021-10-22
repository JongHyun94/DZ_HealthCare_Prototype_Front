const Result = () => {
  return (
    <div className="his-content">
      <div className="section-wrap">
        <div className="section">
          <div className="box">* Section 단위로 추가/삭제하여 사용하세요.</div>
        </div>
        <div className="section h-full">
          <div className="col fx0">
            <div className="box panel shadow">
              <div className="box-sec">
                {/*컨텐츠 예시*/}
                <div
                  style={{
                    width: "650px",
                    height: "200px",
                    padding: "20px",
                    background: "#f7f7f7",
                    fontWeight: "bold",
                  }}
                >
                  * fx0 클래스를 사용하면 내부에서 사용되는 컨텐츠의 크기에 따라 가로폭이 정의됩니다.
                  <br />* box의 기본값은 flex: 1;입니다.
                </div>
                {/*//컨텐츠 예시*/}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="box panel shadow">
              <div className="box-sec">
                {/*컨텐츠 예시*/}
                <div
                  style={{
                    width: "50%",
                    height: "200px",
                    padding: "20px",
                    background: "cornflowerblue",
                    fontWeight: "bold",
                  }}
                >
                  1
                </div>
                {/*//컨텐츠 예시*/}
              </div>
              <div className="box-sec">
                {/*컨텐츠 예시*/}
                <div
                  style={{ width: "75%", height: "300px", padding: "20px", background: "moccasin", fontWeight: "bold" }}
                >
                  개발자도구에서 현재 Element를 삭제 해보세요.
                </div>
                {/*//컨텐츠 예시*/}
              </div>
            </div>
            <div className="box panel shadow fb-full">
              <div className="box-sec h-full">
                {/*컨텐츠 예시*/}
                <div style={{ height: "100%", padding: "20px", background: "salmon", fontWeight: "bold" }}>
                  마지막 .box의 자식 컨텐츠의 높이는 유동적이어야됩니다.
                </div>
                {/*//컨텐츠 예시*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
