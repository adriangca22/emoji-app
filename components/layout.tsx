import { defaultConfig } from "next/dist/server/config-shared"
import * as  React from "react"

interface LayoutPops{
    children: React.ReactNode

}
const Layout : React.FunctionComponent<LayoutPops> =({children})=>{
    return(

        <div className="maxw-w-6xl mx-auto p-5 my-8">
            {children}

            </ div>

    )
}
export  default Layout