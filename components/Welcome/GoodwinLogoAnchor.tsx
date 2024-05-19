'use client';

import { Image, Anchor } from '@mantine/core';
import '../../styles/styles.css';

export function GoodwinLogoAnchor() {
  return (
    <Anchor
      href="https://www.hellogoodwin.com/"
      size="lg"
      mb={11}
      display="flex"
      className="goodwin-link"
      data-testid="goodwin-link"
    >
      <Image
        src="https://assets-global.website-files.com/660dd07c326a3acf5f93aff9/6615a090d6ea02702f43de6e_Goodwin-Logo_Emerald%20(5)-p-500.png"
        w="auto"
        fit="contain"
        height={16}
      />
    </Anchor>
  );
}
