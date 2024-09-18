export default function Footer(props) {
  return (
    <div className="content">
      <p className="contentTxt">
        For a more detailed explanation of each of these topics, check out the
        rest of the documentation. To learn more about defining components,
        check out the React.Component API reference.
      </p>
      <br />
      <ul className="navBar">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">FAQ's</a>
        </li>
      </ul>
      <p style={{ color: props.color }}>Copyright &#169; 2024, Inc</p>
    </div>
  );
}
