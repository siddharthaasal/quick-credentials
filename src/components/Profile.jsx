import data from "../data/credentials.json";
import CopyComponent from "./CopyComponent";

export default function Profile() {
    return (
        <>
            <div className="ml-2">
                <div className="text-white text-3xl ml-16 flex gap-8">
                    <div className="text-emerald-400 font-bold ">
                        <CopyComponent name={data.basics.name} val={data.basics.name} />
                    </div>

                </div>
                {/* <hr className="ml-12 mr-12 text-teal-600 mt-4 mb-4" /> */}
                <div className="text-white text-xl ml-24 mt-8">
                    <h2 className="text-2xl mb-2 text-emerald-400">Socials</h2>
                    <div className="ml-8 flex gap-8">
                        <CopyComponent name={"Mail"} val={data.basics.email} />
                        <CopyComponent name={"Portfolio"} val={data.basics.portfolio} />
                        <CopyComponent name={"Github"} val={data.socials.github} />
                        <CopyComponent name={"LinkedIn"} val={data.socials.linkedin} />
                        <CopyComponent name={"Leetcode"} val={data.socials.leetcode} />
                        <CopyComponent name={"Medium"} val={data.socials.medium} />
                    </div>
                </div>

                <div className="text-white text-xl ml-24 mt-8">
                    <h2 className="text-2xl mb-2 text-emerald-400">About</h2>
                    <div className="ml-8 flex gap-8">
                        <CopyComponent name={"Strength"} val={data.about.strength} />
                        <CopyComponent name={"Weakness"} val={data.about.weakness} />
                        <CopyComponent name={"Description"} val={data.about.description} />
                    </div>
                </div>
                <div className="text-white text-xl ml-24 mt-8">
                    <h2 className="text-2xl mb-2 text-emerald-400">Addresses</h2>

                    <div className="ml-8 flex gap-8">
                        <p className="text-yellow-500">_______Original</p>
                        <CopyComponent name={"Street"} val={data.addresses.original.street} />
                        <CopyComponent name={"City"} val={data.addresses.original.city} />
                        <CopyComponent name={"Zip-Code"} val={data.addresses.original["zip-code"]} />
                    </div>

                    <div className="ml-8 flex gap-8">
                        <p className="text-yellow-500">_Correspondence</p>
                        <CopyComponent name={"Street"} val={data.addresses.correspondence.street} />
                        <CopyComponent name={"City"} val={data.addresses.correspondence.city} />
                        <CopyComponent name={"Zip-Code"} val={data.addresses.correspondence["zip-code"]} />
                    </div>



                </div>
                <div className="text-white text-xl ml-24 mt-8">
                    <h2 className="text-2xl mb-2 text-emerald-400">Education</h2>

                    <div className="ml-8 flex gap-8">
                        <p className="text-yellow-500">_College</p>
                        <CopyComponent name={"Name"} val={data.education.college.name} />
                        <CopyComponent name={"Location"} val={data.education.college.location} />
                        <CopyComponent name={"Course"} val={data.education.college.course} />
                        <CopyComponent name={"Marks"} val={data.education.college.marks} />
                        <CopyComponent name={"Passing Year"} val={data.education.college.passingYear} />
                    </div>
                    <div className="ml-8 flex gap-8">
                        <p className="text-yellow-500">_____XII</p>
                        <CopyComponent name={"Name"} val={data.education.XII.name} />
                        <CopyComponent name={"Location"} val={data.education.XII.location} />
                        <CopyComponent name={"_Board"} val={data.education.XII.board} />
                        <CopyComponent name={"Marks"} val={data.education.XII.marks} />
                        <CopyComponent name={"Passing Year"} val={data.education.XII.year} />
                    </div>
                    <div className="ml-8 flex gap-8">
                        <p className="text-yellow-500">_______X   </p>
                        <CopyComponent name={"Name"} val={data.education.X.name} />
                        <CopyComponent name={"Location"} val={data.education.X.location} />
                        <CopyComponent name={"_Board"} val={data.education.X.board} />
                        <CopyComponent name={"Marks"} val={data.education.X.marks} />
                        <CopyComponent name={"Passing Year"} val={data.education.X.year} />
                    </div>



                </div>

            </div>

        </>
    )
}