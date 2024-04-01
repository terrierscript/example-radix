import { Box, Button, Flex } from "@radix-ui/themes"
import { FC } from "react"

export const SampleComponent: FC<{}> = () => {
  return <Box p={"4"} style={{
    backgroundColor: "var(--red-5)",
    borderRadius: "var(--radius-6)"
  }}>
    <Flex gap="4">
      <Box>
        hello
      </Box>
      <Button>
        xxx
      </Button>
    </Flex>
  </Box>
}