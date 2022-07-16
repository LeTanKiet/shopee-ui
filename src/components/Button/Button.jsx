import { Link } from "react-router-dom";

const Button = ({ to, href, className, primary, onClick, children }) => {
    let Comp = "button";

    const props = {
        onClick,
    };

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = "a";
        props.href = href;
    }

    const classes = ["flex items-center justify-center"];

    if (primary) {
        classes.push("hover:text-primary");
    }

    return (
        <Comp {...props} className={className + " " + classes.join(" ")}>
            {children}
        </Comp>
    );
};

export default Button;
