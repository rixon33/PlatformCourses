import { Link } from "react-router";

export const Footer = () => {
    return (
        <div className="bg-[#111] flex flex-col items-center justify-center gap-4 px-10 py-20 text-white">
            <h3 className="text-3xl text-center">
                Ready to start learning?
            </h3>
            <span className="text-2xl text-gray-300 max-w-200 text-center">
                Join thousands of students already learning at CourseHub and take your skills to the next level.
            </span>
            <Link to={"/SignIn"}>
                <button className="btn-principal"> Start today</button>
            </Link>
            <div className="flex flex-row gap-6 pt-6">
                <Link
                    to="/Courses"
                    className="hover:text-[#FF0B55] transition-colors"
                >
                    Courses
                </Link>
                <a href="#" className="hover:text-[#FF0B55] transition-colors">
                    Contact
                </a>
                <a href="#" className="hover:text-[#FF0B55] transition-colors">
                    Support
                </a>
            </div>
        </div>
    );
};
