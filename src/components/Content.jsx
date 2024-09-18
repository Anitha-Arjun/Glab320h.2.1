import image from "../assets/image/React.png";

export default function Content() {
  return (
    <div className="content">
      <img src={image} alt="logo" width="1150" height="550" />
      <h2>React</h2>
      <p className="contentTxt">
        React is a free and open-source front-end JavaScript library for
        building component-based user interfaces. React is not a full
        Model-View-Controller (MVC) framework like some other front-end
        frameworks you may have heard of or are familiar with, like Next.js
        (which uses the React library). React is simply a library that
        encourages and facilitates the creation of reusable UI components that
        present data which can change over time. React was created by Jordan
        Walke, a software engineer working at Facebook at the time, in response
        to the company's growing need for providing a more dynamic, more
        responsive interface that was also fast, scalable, and highly
        performant. React was released in 2013, and has since been maintained by
        Meta and a large community of contributors.
      </p>
      <h2>Rules to follow when using JSX</h2>
      <ul>
        <li>Only One Top-Level Element</li>
        <li>Attributes are camelCase</li>
        <li>Inline Styles in JSX Need to be Wrapped</li>
        <li> Arrays Work</li>
        <li>JavaScript Expressions can be Injected</li>
        <li> Everything Must Close</li>
      </ul>
    </div>
  );
}
