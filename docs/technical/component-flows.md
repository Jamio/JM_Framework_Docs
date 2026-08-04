<div class="jmf-page-hero" style="--jmf-page-image: url('../assets/images/dev-component-flows.jpg');" markdown>
<span class="jmf-eyebrow">FRAMEWORK DEVELOPMENT</span>
# Component Flow Maps
How actions, functions, events and authoritative state connect.
</div>

## Reading the maps

<span class="jmf-flow jmf-flow--client">CLIENT</span>
<span class="jmf-flow jmf-flow--network">CBA EVENT</span>
<span class="jmf-flow jmf-flow--server">SERVER</span>
<span class="jmf-flow jmf-flow--state">STATE / BROADCAST</span>

Each map should show the entry point, data passed forward, locality transition, authoritative mutation, persistent state and cleanup route. Function names can be added once a component's implementation is stable.

## Aid Station

~~~mermaid
flowchart TD
    A["ACE self-action<br/>Player chooses deploy/remove"] --> B["Client request<br/>Position, direction, player"]
    B --> C["CBA server event"]
    C --> D{"Server validates request"}
    D -->|Deploy| E["Remove existing station<br/>Spawn composition"]
    D -->|Remove| F["Delete objects and marker"]
    E --> G["Store root + object array"]
    G --> H["Set medical facility<br/>Create global marker"]
    F --> I["Clear authoritative state"]
    H --> J["All clients receive world state"]
~~~

### Data and responsibility

| Stage | Receives | Produces | Runs on |
|---|---|---|---|
| Player action | Player, intended transform | Deploy/remove request | Client |
| CBA event | Request payload | Routed handler call | Network → server |
| Server handler | Validated request | Spawned/deleted objects | Server |
| State update | Root object and composition array | Current facility state | Server |
| Marker update | Facility position or removal | Global map state | Server / all clients |

!!! note "Implementation checkpoint"
    Replace descriptive node labels with exact function and event names when the component API is stable. The diagram should explain real execution, not an idealised design.

## Template for another component

~~~mermaid
flowchart LR
    A["Player, Eden or ZEN entry"] --> B["Local validation"]
    B --> C["CBA event / direct call"]
    C --> D["Authoritative handler"]
    D --> E["State mutation"]
    E --> F["Broadcast / client effect"]
    D --> G["Cleanup / rollback"]
~~~

For every new map, record:

- Entry points and conditions.
- Parameters passed between functions.
- Locality at each step.
- Variables that hold authoritative state.
- Public events or broadcasts.
- JIP, respawn and cleanup behaviour.
