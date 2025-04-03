import React, { createContext, useState, useContext, useEffect } from 'react';

// Define types
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create context
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook for using the theme
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Try to get theme from localStorage, otherwise default to dark
    const savedTheme = localStorage.getItem('theme');
    // Always default to dark if no preference is saved
    return (savedTheme as Theme) || 'dark';
  });

  useEffect(() => {
    // Always force dark theme on initial load regardless of localStorage
    if (!localStorage.getItem('theme')) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    
    // Also add dark-mode class to body if theme is dark
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme: Theme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
