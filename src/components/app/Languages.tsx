import React, {ReactNode} from "react";


const LanguageCard: React.FC<{ children?: ReactNode }> = ({ children }) => (
    <div className="
        w-full sm:w-52 h-56 flex flex-col justify-center items-center gap-2.5
        font-semibold border border-[#e8e8efff] shadow-[0_0_30px_rgba(0,0,0,0.04)]">
        <div className="w-20">
            { children }
        </div>
    </div>
)


const Languages: React.FC = () => (
    <div className="w-full flex justify-center">
        <div className="w-full max-w-[1150px] pt-10 text-center">

            <h4 className="subtitle text-torch-red">
                Check This Out
            </h4>
            <h3 className="title mb-10 text-ebony-clay">
                Languages I Speak
            </h3>

            {/* Wrapper for language cards */}
            <div className="w-full flex justify-center flex-wrap gap-8">

                <LanguageCard>
                    <img alt="" src="/app/languages/JavaScript.svg" />
                    JavaScript
                </LanguageCard>
                
                <LanguageCard>
                    <img alt="" src="/app/languages/TypeScript.svg" />
                    TypeScript
                </LanguageCard>
                
                <LanguageCard>
                    <img alt="" src="/app/languages/Java.svg"/>
                    Java
                </LanguageCard>
                
                <LanguageCard>
                    <img alt="" src="/app/languages/Kotlin.svg"/>
                    Kotlin
                </LanguageCard>
                
                <LanguageCard>
                    <img alt="" src="/app/languages/Python.svg" />
                    Python
                </LanguageCard>
                
                <LanguageCard>
                    <img alt="" src="/app/languages/C%23.svg"/>
                    C#
                </LanguageCard>

            </div>

        </div>
    </div>
)

export default Languages