import { Theme } from "@radix-ui/themes"
import React, { FC, PropsWithChildren } from "react"

export const Provider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Theme radius="medium">
    {children}
  </Theme>
}

