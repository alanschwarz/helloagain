Hello Again - Coding task
========= 

The task is defined  [here](https://docs.google.com/document/d/1PmV8H3T2VbUfGgi3Ru-Mp-iaKYNxd1cebiol-NRNImo/edit).

---
Technologies
--------- 
I chose:
* Expo (for the fastest developer experience)
* Redux - is a requierment
* No UI framework - plain js/css

---
Asumptions
---------

1. If the user still needs more points to collect the reward, the CTA is disabled.
2. A reward can be collected only once. (For the sake of simplicity and showcasing, the store does not persist on this app).

---
Code architecture
---------
The main entry point for the app is the `App.tsx` file, located at the root of the project. This component is wrapped inside of the `react-redux:` `<Provider/>`. Which takes the store and its configuration as a prop.

Inside the store folder, there are the actions to be dispatched and the reducer that manipulates the state depending on the dispatched action.

Tha main component is `App.tsx` located inside `/src` and its corresponding styles are inside `App.styles.ts`. This component gets data from the API with a `fetchData()` function, located in `/src/services/bountieService.ts`.

The API endpoint is saved in the `constants.ts` file inside `/src`

This component generates a `<FlatList/>`. Each item in this list is rendered as a `<DataItem/>` located in `/src/components/DataItem`.

---
*Duration: ~4h*

*Alan Schwarz*