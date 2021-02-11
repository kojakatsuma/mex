import React from 'react';

export const ColorModeToggle = () => {
  const changeColorMode = (mode: string) => {
    const isDarkMode = mode === 'dark-mode';
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.body.classList.add(isDarkMode ? 'dark-mode' : 'light-mode');
    document.body.classList.remove(isDarkMode ? 'light-mode' : 'dark-mode');
  };
  return (
    <div>
      <button onClick={() => changeColorMode('light-mode')}>light</button>
      <button onClick={() => changeColorMode('dark-mode')}>dark</button>
    </div>
  );
};
