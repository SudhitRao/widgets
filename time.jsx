

export const command = "date +\"%T %m-%d-%Y\""

export const refreshFrequency = 1000

export const className =`
  top: 10%;
  right: 0;
  left: 0;
  width: 340px;
  box-sizing: border-box;
  margin: auto;
  padding: 120px 20px 20px;
  background-color: rgba(255, 255, 255, 0.9);
  background-image: url('logo.png');
  background-repeat: no-repeat;
  background-size: 176px 84px;
  background-position: 50% 20px;
  -webkit-backdrop-filter: blur(20px);
  color: #141f33;
  font-family: Helvetica Neue;
  font-weight: 300;
  border: 2px solid #fff;
  border-radius: 1px;
  text-align: justify;
  line-height: 1.5;

  h1 {
    font-size: 20px;
    margin: 16px 0 8px;
  }

  em {
    font-weight: 400;
    font-style: normal;
  }
`


export const render = ({output, error}) => {
    return error ? (
      <div>Something went wrong: <strong>{String(error)}</strong></div>
    ) : (
      <div>
        <h1>{output}</h1>
      </div>
    );
  }