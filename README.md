## Start aplikacji:
```
cd ~/ścieżka/do/repozytorium
npm install
npm start
```

## Uwagi

Oczekiwany rezultat został osiągnięty. 
Z dodatków elementów zaimplementowałem informację tekstową podczas ładowania komentarzy.

Nie użyłem biblioteki Immutable, ze względu na to, że wyklucza użycie spread operatora. Starałem się pisać funkcję przy użyciu metod i składni, które pozwalają na zachowanie czystości funkcji. W roli middleware użyłem redux-thunk.
