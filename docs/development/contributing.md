# Contributing

JM Framework uses HEMTT and follows CBA/ACE component conventions.

Before submitting a change:

1. keep the change inside the owning component;
2. add required addon dependencies explicitly;
3. gate optional runtime work behind the component's enabled state;
4. validate server requests and object locality;
5. define how a JIP client reconstructs persistent state;
6. run `hemtt check`;
7. test the relevant Eden and Zeus flows;
8. update the matching component guide.

Do not commit generated HEMTT output. Preserve third-party attribution files when porting or adapting external work.
