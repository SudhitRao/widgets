export const command = "/Users/sudhit/git/widget-bar/shell-scripts/battery.sh 2>/dev/null "

export const refreshFrequency = 1000

export const className = `
    background-color: #fff;
    background-color: rgba(0,0,0,0);
    font-family: Helvetica Neue;
    font-weight: 200;
    color : white;
    left : 10%;
    padding-left : 7px;
    padding-right : 7px;
    position : "absolute";
    p {
      font-size : 40px;
    }
    `
    


export const render = ({output, error}) => {
    return error ? (
      <div>Something went wrong: <strong>{String(error)}</strong></div>
    ) : (
      <div>
        <p>{output} hrs rem</p>
      </div>
    );
  }