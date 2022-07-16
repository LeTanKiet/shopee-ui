import { Footer, Header } from "~/components";

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="max-w-max_width mx-auto">{children}</div>
            <Footer />
        </div>
    );
};

export default MainLayout;
