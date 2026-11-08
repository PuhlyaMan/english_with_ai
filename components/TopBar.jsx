import Image from "next/image";

export function TopBar({ online, canInstall, onInstall }) {
  return (
    <header className="topbar">
      <div className="brand">
        <Image src="/icons/icon-192.png" width={40} height={40} alt="" priority />
        <div>
          <p className="brand-name">EasyEnglish</p>
          <p className="brand-status">{online ? "Online" : "Offline"}</p>
        </div>
      </div>
      {canInstall ? (
        <button type="button" className="install" onClick={onInstall}>
          Install
        </button>
      ) : null}
    </header>
  );
}
