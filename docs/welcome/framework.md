<div class="jmf-page-hero" style="--jmf-page-image: url('../assets/images/welcome-framework.jpg');" markdown>
<span class="jmf-eyebrow">WELCOME</span>
# Welcome to JM Framework
The shared systems behind Misfits operations—for players, Mission Makers and developers.
</div>

<div class="grid cards jmf-feature-cards" markdown>

-   :material-account-group:{ .lg .middle } **For players**

    ---

    Consistent gear, respawning, redeployment, vehicles and mission interactions.

-   :material-map-edit:{ .lg .middle } **For Mission Makers**

    ---

    Eden-first configuration with clear component controls and sensible defaults.

-   :material-lightning-bolt:{ .lg .middle } **For Zeus**

    ---

    Live adjustment, recovery and escalation through focused ZEN modules.

-   :material-code-braces:{ .lg .middle } **For development**

    ---

    Modular CBA/ACE-style components designed for multiplayer and future expansion.

</div>

## What the framework is

JM Framework is the common layer used to build and run our Arma 3 operations. It packages frequently used mission systems into reusable addon components instead of requiring each Mission Maker to rebuild them with copied scripts and init code.

<span class="jmf-accent">The aim is consistency without sameness:</span> missions share dependable foundations while Mission Makers remain free to change the setting, scale, rules and experience.

!!! info "Choose your route"
    **Playing?** Start with the [Player Guide](../players/index.md).  
    **Building a mission?** Open [Mission Making](../mission-makers/index.md).  
    **Returning to the codebase?** Use the [Development quick reference](../technical/quick-reference.md).

## Design at a glance

| Principle | What it means |
|---|---|
| :material-puzzle-outline: **Modular** | Enable and configure only the components a mission needs. |
| :material-server-network: **Multiplayer-aware** | Locality, persistence, JIP and server authority are designed in. |
| :material-tune: **Configurable** | Eden handles setup; ZEN handles appropriate live changes. |
| :material-account-multiple-check: **Side-aware** | PvE remains simple while TvT systems can separate teams cleanly. |
| :material-book-open-page-variant: **Documented** | Player use, Mission Maker setup and technical flow stay distinct. |
