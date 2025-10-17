# 💱 Conversor de Moedas - React Native App

![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)

Um app moderno e intuitivo para conversão de moedas em tempo real, desenvolvido com React Native e Expo. Converte valores entre diversas moedas usando APIs externas, com interface responsiva e suporte a safe area para dispositivos móveis.

## ✨ Funcionalidades

- 🔄 **Conversão em Tempo Real**: Converte valores entre moedas populares (USD, BRL, EUR, etc.) usando taxas de câmbio atualizadas.
- 📱 **Interface Responsiva**: Design adaptável para Android e iOS, com suporte a safe area e scroll suave.
- 🎨 **UI Moderna**: Componentes customizados com cores dinâmicas e animações suaves.
- ⚡ **Performance Otimizada**: Carregamento rápido e eficiente, com tratamento de erros.
- 🌐 **API Integrada**: Consome dados de câmbio de APIs externas para precisão.

## 🛠️ Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile cross-platform.
- **Expo**: Plataforma para builds, testes e deploy simplificados.
- **TypeScript**: Tipagem estática para código mais robusto.
- **React Native Safe Area Context**: Gerenciamento de áreas seguras (status bar, notches).
- **Expo Status Bar**: Controle da barra de status.
- **APIs Externas**: Integração com serviços de câmbio (ex.: ExchangeRate API).

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- Expo CLI instalado globalmente: `npm install -g @expo/cli`
- Emulador Android/iOS ou dispositivo físico

### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/jocelymarques/conversor-app.git
   cd conversor-app
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o projeto:
   ```bash
   npm start
   ```
   - Escolha a plataforma (Android/iOS/Web) ou use `expo start --android` para Android.

### Build para Produção
Para gerar APK/AAB:
1. Instale EAS CLI: `npm install -g @expo/eas-cli`
2. Login: `eas login`
3. Configure: `eas build:configure`
4. Build: `eas build --platform android --profile production`

## 📸 Screenshots

<img src="assets/screenshot_app.jpg" alt="App Screenshot" width="250" height="500">

## 👨‍💻 Sobre o Desenvolvedor

Olá! Sou **Jocely Marques**, desenvolvedor apaixonado por mobile e tecnologias web. Este projeto demonstra minhas habilidades em React Native, Expo e integração de APIs. Estou sempre buscando novos desafios e oportunidades!

- 🌐 **Site Pessoal**: [jocelymarques.site](https://jocelymarques.site)
- 💼 **LinkedIn**: [linkedin.com/in/jocelymarques](https://linkedin.com/in/jocelymarques)
- 🐙 **GitHub**: [github.com/jocelymarques](https://github.com/jocelymarques)

Se gostou do projeto, dê uma ⭐ e entre em contato para colaborações ou oportunidades de trabalho!

## 📄 Licença
Este projeto é open-source sob a licença MIT. Sinta-se à vontade para usar e contribuir!