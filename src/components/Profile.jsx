import data from "../data/credentials.json";
import CopyComponent from "./CopyComponent";

export default function Profile() {
    return (
        <div className="ml-2 sm:ml-4 md:ml-16 select-none">
            {/* Name Section */}
            <div className="text-white text-2xl sm:text-3xl ml-8 sm:ml-16 flex flex-wrap gap-4 sm:gap-8">
                <div className="text-emerald-400 font-bold">
                    <CopyComponent name={data.basics.name} val={data.basics.name} />
                </div>
            </div>

            {/* Socials Section */}
            <div className="text-white text-lg sm:text-xl ml-12 sm:ml-24 mt-6 sm:mt-8">
                <h2 className="text-xl sm:text-2xl mb-2 text-emerald-400">Socials</h2>
                <div className="ml-4 sm:ml-8 flex flex-wrap gap-4 sm:gap-8">
                    <CopyComponent name={"Mail"} val={data.basics.email} />
                    <CopyComponent name={"Portfolio"} val={data.basics.portfolio} />
                    <CopyComponent name={"Github"} val={data.socials.github} />
                    <CopyComponent name={"LinkedIn"} val={data.socials.linkedin} />
                    <CopyComponent name={"Leetcode"} val={data.socials.leetcode} />
                    <CopyComponent name={"Medium"} val={data.socials.medium} />
                    <CopyComponent name={"Discord"} val={data.socials.discord} />
                </div>
            </div>

            {/* About Section */}
            <div className="text-white text-lg sm:text-xl ml-12 sm:ml-24 mt-6 sm:mt-8">
                <h2 className="text-xl sm:text-2xl mb-2 text-emerald-400">About</h2>
                <div className="ml-4 sm:ml-8 flex flex-wrap gap-4 sm:gap-8">
                    <CopyComponent name={"Strength"} val={data.about.strength} />
                    <CopyComponent name={"Weakness"} val={data.about.weakness} />
                    <CopyComponent name={"Description"} val={data.about.description} />
                </div>
            </div>

            {/* Addresses Section */}
            <div className="text-white text-lg sm:text-xl ml-12 sm:ml-24 mt-6 sm:mt-8">
                <h2 className="text-xl sm:text-2xl mb-2 text-emerald-400">Addresses</h2>

                <div className="ml-4 sm:ml-8 flex flex-wrap gap-4 sm:gap-8 items-center">
                    <p className="text-yellow-500 text-md sm:text-lg">______Original</p>
                    <CopyComponent name={"Street"} val={data.addresses.original.street} />
                    <CopyComponent name={"City"} val={data.addresses.original.city} />
                    <CopyComponent name={"Zip-Code"} val={data.addresses.original["zip-code"]} />
                </div>

                <div className="ml-4 sm:ml-8 flex flex-wrap gap-4 sm:gap-8 items-center mt-4">
                    <p className="text-yellow-500 text-md sm:text-lg">Correspondence</p>
                    <CopyComponent name={"Street"} val={data.addresses.correspondence.street} />
                    <CopyComponent name={"City"} val={data.addresses.correspondence.city} />
                    <CopyComponent name={"Zip-Code"} val={data.addresses.correspondence["zip-code"]} />
                </div>
            </div>

            {/* Education Section */}
            <div className="text-white text-lg sm:text-xl ml-12 sm:ml-24 mt-6 sm:mt-8">
                <h2 className="text-xl sm:text-2xl mb-2 text-emerald-400">Education</h2>

                <div className="ml-4 sm:ml-8 flex flex-wrap gap-4 sm:gap-8 items-center">
                    <p className="text-yellow-500 text-md sm:text-lg">College</p>
                    <CopyComponent name={"Name"} val={data.education.college.name} />
                    <CopyComponent name={"Location"} val={data.education.college.location} />
                    <CopyComponent name={"Course"} val={data.education.college.course} />
                    <CopyComponent name={"Marks"} val={data.education.college.marks} />
                    <CopyComponent name={"Passing Year"} val={data.education.college.passingYear} />
                </div>

                <div className="ml-4 sm:ml-8 flex flex-wrap gap-4 sm:gap-8 items-center mt-4">
                    <p className="text-yellow-500 text-md sm:text-lg">____XII</p>
                    <CopyComponent name={"Name"} val={data.education.XII.name} />
                    <CopyComponent name={"Location"} val={data.education.XII.location} />
                    <CopyComponent name={"_Board"} val={data.education.XII.board} />
                    <CopyComponent name={"Marks"} val={data.education.XII.marks} />
                    <CopyComponent name={"Passing Year"} val={data.education.XII.year} />
                </div>

                <div className="ml-4 sm:ml-8 flex flex-wrap gap-4 sm:gap-8 items-center mt-4">
                    <p className="text-yellow-500 text-md sm:text-lg">______X</p>
                    <CopyComponent name={"Name"} val={data.education.X.name} />
                    <CopyComponent name={"Location"} val={data.education.X.location} />
                    <CopyComponent name={"_Board"} val={data.education.X.board} />
                    <CopyComponent name={"Marks"} val={data.education.X.marks} />
                    <CopyComponent name={"Passing Year"} val={data.education.X.year} />
                </div>
            </div>
        </div>
    )
}