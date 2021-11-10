import { GetServerSideProps, NextPage } from "next";

// @ts-ignore
const Aboutme: NextPage = ({ stars }) => {
    return (
        <div className="text-red-400">
            Test: { stars.homepage }
            <a href="#"
               className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Get started
            </a>
            <a className="text-blue-500 no-underline text-sm">Home</a>
        </div>
    );
};

export default Aboutme;

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return {
        props: {
            stars: json,
        },
    };
}
