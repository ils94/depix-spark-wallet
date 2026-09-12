# DePix Spark Wallet

Web Wallet simples para verificar saldo de Bitcoin e DePix na Spark e fazer Swap de DePix para Bitcoin

## Funcionalidades

- Importação de carteira por frase de recuperação (12 ou 24 palavras)
- Criptografia local da seed com AES-256-GCM (senha do usuário)
- Exibição de saldo em BTC (sats) e DePix
- Endereço Spark para recebimento
- Swap DePix → BTC com simulação e proteção de slippage
- Histórico de transferências BTC e transações DePix

## Stack

- Spark SDK (`@buildonspark/spark-sdk`)
- Flashnet SDK (`@flashnet/sdk`)
- Web Crypto API (PBKDF2 + AES-GCM)
- HTML / CSS / JavaScript (ES modules)
- Sem backend, tudo roda no navegador

## Como usar

1. Abra o `index.html` em um servidor local (ou hospede estaticamente).
2. Na primeira vez, informe a frase de recuperação e crie uma senha.
3. A seed e criptografada e salva apenas no `localStorage` do navegador.
4. Nas proxemas visitas, desbloqueie com a senha.
5. Use o endereço Spark para receber fundos.
6. Na seção de swap, informe a quantidade de DePix, simule e execute.

### Servidor local rápido

```bash
npx serve .
# ou
python -m http.server 8080
```

Acesse `http://localhost:8080` (ou a porta indicada).

## Estrutura do projeto

```
├── index.html
├── css/
│   ├── base.css
│   ├── components.css
│   ├── wallet.css
│   └── responsive.css
└── js/
    ├── main.js
    ├── config.js
    ├── crypto-service.js
    ├── storage-service.js
    ├── wallet-service.js
    ├── swap-service.js
    ├── sdk-loader.js
    └── dom.js
```

## Segurança

- A frase de recuperação **nunca** e enviada para nenhum servidor.
- A criptografia usa PBKDF2 (250.000 iterações) + AES-256-GCM.
- Os dados ficam apenas no navegador (`localStorage`).
- Apagar a carteira salva remove a seed criptografada.
- Sempre mantenha um backup offline da frase de recuperação.

Você pode usar diretamente desse repositório pelo link:

https://ils94.github.io/depix-spark-wallet/

