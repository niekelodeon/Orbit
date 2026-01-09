import Connection from '../components/Connection'
import RemoteStructure from '../components/RemoteStructure'

export default function Settings() {
    return (
        <div id="container-page" className="max-h-screen overflow-hidden">
            <div id="container-layout" className="flex flex-row justify-center gap-[25%] pt-20 pr-[7%] pb-10 pl-[10%]">
                <div id="container-Connection">
                    <Connection />
                </div>

                <div id="container-remoteStructure">
                    <RemoteStructure />
                </div>
            </div>
        </div>
    )
}
