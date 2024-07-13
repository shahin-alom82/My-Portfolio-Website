// import { twMerge } from "tailwind-merge";

const Container = ({ children, id }) => {
      // const newClassName = twMerge("max-w-screen-xl mx-auto px-4 lg:px-0 h-screen", className)
      return (
            <div id={id}>
                  {children}
            </div>
      );
};

export default Container;