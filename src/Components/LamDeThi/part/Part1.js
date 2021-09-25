import React from "react";

const Part1 = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        <div style={{ fontSize: "34px" }} className="title-part">
          Part 1
        </div>
        <p className="des-part">Adding description of this part</p>
        <img
          style={{
            width: "93%",
            height: "250px",
            marginBottom: "50px",
            objectFit: "contain",
          }}
          src={`https://nikaws.cf/${data.listPartDocumentArray[0].url}`}
          alt=""
        />
      </div>
      {/* https://nikaws.cf */}
      {/* optional chaining  */}

      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="title-if-need">If need, add title here</div>
          <div className="qes-content">
            <ol type={1}>
              {data.questions.map((question) => (
                <li key={question.id}>{question.noidung_cauhoi}</li>
              ))}
            </ol>
          </div>
        </div>
        <div
          style={{
            borderLeft: "1px solid grey",
            paddingLeft: "40px",
          }}
          className="col-md-6 col-sm-12"
        >
          <div className="title-if-need">If need, add title here</div>
          <div className="ans-content w-100">
            <ol className="w-100" type="A">
              {data.document.map((elm) => (
                <li key={elm.id}>
                  <img
                    src={`https://nikaws.cf/${elm.url}`}
                    alt=""
                    className="w-100 h-100"
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="title-if-need">Fill your answer:</div>
          <form className="form-check" action>
            <ol
              type={1}
              style={{
                width: "100%",
                flexDirection: "row",
                padding: "0 10px",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                height: "100px",
              }}
            >
              <li>
                <input type="text" name id />
              </li>
              <li>
                <input type="text" name id />
              </li>
              <li>
                <input type="text" name id />
              </li>
              <li>
                <input type="text" name id />
              </li>
              <li>
                <input type="text" name id />
              </li>
              <li>
                <input type="text" name id />
              </li>
              <li>
                <input type="text" name id />
              </li>
            </ol>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Part1;
