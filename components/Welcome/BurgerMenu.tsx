'use client';

import { Anchor } from '@mantine/core';
import '../../styles/styles.css';

interface Props {
  opened: boolean;
  selectedCategory: string;
  handleItemClick: (category: string) => void;
}

export function BurgerMenu(props: Props) {
  const categories = ['Aviation', 'Travel', 'Airspace', 'Private Jets', 'Airports', 'Vacation'];
  return (
    <div
      className={props.opened ? 'hamburger-panel-opened' : 'hamburger-panel-closed'}
      data-testid="burger-menu"
    >
      <div className="category-container" data-testid="category-container">
        {categories.map((item: string, index: number) => (
          <Anchor
            underline="never"
            c={props.selectedCategory === item ? 'cornflowerblue' : 'black'}
            fw={600}
            pl={36}
            pr={36}
            pt={16}
            pb={16}
            key={index}
            data-testid="burger-listitem"
            onClick={() => {
              props.handleItemClick(item);
            }}
          >
            {item.toUpperCase()}
          </Anchor>
        ))}
      </div>
      <div className="burger-overlay" />
    </div>
  );
}
