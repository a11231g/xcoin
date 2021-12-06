# xcoin

> Scenario - user has three wallets:
USD (initial balance $200)
EUR (initial balance €150)
GBP (initial balance £10)
Criteria:
Switch wallets e.g: EUR > GBP., GBP > USD., USD > EUR.
Enter the desired amount to exchange and has a CTA (call-to-action) to conclude the transaction.
Use this (https://exchangeratesapi.io/documentation/) or similar API to get the conversion rates.
Wallet balances are updated correctly.
Show an error message when the desired exchange amount exceeds the current balance.


## Installation


```sh
1- create an account on exchangerate-api.com and get the token
2- cp .env.example .env
3- paste token into .env
4- yarn && cd ios && pod install
5- npx react-native run-ios --simulator="iPhone 11"
```

### demo
