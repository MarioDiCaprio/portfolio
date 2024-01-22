import React from "react";

const Contact: React.FC = () => (
    <div className="w-full my-[100px] flex justify-center">
        <div className="w-full max-w-[1150px] px-3">
            
            <h4 className="subtitle text-torch-red">
                Contact Me
            </h4>
            <h3 className="title">
                Write A Message
            </h3>
            
            <div className="mb-[50px] text-torch-red">
                Note: As of the current moment, I am not taking any mail. Therefore,
                this option is disabled.
            </div>
            
            <div className="grid grid-cols-2 gap-2">

                {/* First Name */}
                <div className="col-span-2 sm:col-span-1">
                    <input
                        className="w-full p-[25px] bg-[#f4f4f8] border-none font-medium text-medium font-monospace"
                        placeholder="First Name"
                    />
                </div>

                {/* Last Name */}
                <div className="col-span-2 sm:col-span-1">
                    <input
                        className="w-full p-[25px] bg-[#f4f4f8] border-none font-medium text-medium font-monospace"
                        placeholder="Last Name"
                    />
                </div>

                {/* Email */}
                <div className="col-span-2">
                    <input
                        className="w-full p-[25px] bg-[#f4f4f8] border-none font-medium text-medium font-monospace"
                        placeholder="Email"
                        type="email"
                    />
                </div>

                {/* Message */}
                <div className="col-span-2">
                    <textarea
                        className="w-full min-h-[200px] p-[25px] bg-[#f4f4f8] border-none font-medium text-medium font-monospace resize-y"
                        placeholder="Message"
                    />
                </div>

                {/* Submit Button */}
                <button className="
                    w-full max-w-[300px] p-5
                    border-none rounded text-lg font-bold text-white
                    bg-animated-gradient bg-gradient-to-r from-rose via-portica to-rose
                    cursor-pointer">
                    Submit
                </button>
                
            </div>
            
        </div>
    </div>
)

export default Contact