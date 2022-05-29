

const Circles = ({ color, value }) => {
  return (
    <div
      className="Circle"
      style={{
        backgroundColor: color,
        borderRadius: "50%",
        width: "100px",
        height: "90px",
        border: "1px solid black",
        marginBottom: "3px",
        boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
      }}
    >
      <div>{value}</div>
    </div>
  );
};

export default Circles;
