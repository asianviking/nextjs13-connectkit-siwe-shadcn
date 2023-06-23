import { Avatar, ConnectKitButton } from "connectkit"

import { buttonVariants } from "./ui/button"

export const ConnectButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({
        isConnected,
        isConnecting,
        show,
        hide,
        address,
        ensName,
        truncatedAddress,
        chain,
      }) => {
        return (
          <button
            className={buttonVariants({
              size: "sm",
            })}
            onClick={show}
          >
            {isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
          </button>
        )
      }}
    </ConnectKitButton.Custom>
  )
}
