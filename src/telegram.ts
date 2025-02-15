// src/telegram.ts

// Объявляем интерфейс для глобального окна
declare global {
  interface Window {
    Telegram: {
      WebApp: ITelegramWebApp
    }
  }
}

export interface ITelegramWebApp {
    initData?: string;
    ready: () => void;
    expand: () => void;
    close: () => void;
    sendData?: (data: string) => void;
    // Другие методы и свойства, которые предоставляет API, можно добавить по необходимости
  }
  
  // Пытаемся получить объект Telegram WebApp, если он доступен
  const Telegram: ITelegramWebApp | null = typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp
    ? window.Telegram.WebApp
    : null;
  
  export const initTelegram = (): ITelegramWebApp | null => {
    if (Telegram) {
      // Инициализируем API
      Telegram.ready();
      // Если нужно, развернем окно
      // Telegram.expand();
      console.log("Telegram WebApp API инициализирован", Telegram);
    } else {
      console.warn("Приложение не запущено из Telegram");
    }
    return Telegram;
  };
  
  export default Telegram;
  