<div class="jmf-page-hero" style="--jmf-page-image: url('../assets/images/welcome-framework.jpg');" markdown>
<span class="jmf-eyebrow">WELCOME</span>
# Welcome to JM Framework
The system to help run our missions, developed by Jamio
</div>

<div class="grid cards jmf-feature-cards" markdown>

-   :material-account-group:{ .lg .middle } **For players**

    ---

    Consistent interactions, systems and behaviour across operations.

-   :material-map-edit:{ .lg .middle } **For Mission Makers**

    ---

    3DEN configuration for individual components.

-   :material-lightning-bolt:{ .lg .middle } **For Zeus**

    ---

    Live adjustment through focused ZEN modules.

-   :material-code-braces:{ .lg .middle } **For development**

    ---

    Modular CBA/ACE-style components designed for multiplayer and future expansion.

</div>

## What the framework is

JM Framework is the common layer used to build and run our Arma 3 operations. It packages frequently used mission systems into reusable addon components instead of requiring mission-makers to rebuild them with copied scripts and init code.

<span class="jmf-accent">The aim is consistency:</span> missions share dependable foundations while mission-makers remain free to configure and adjust for the kind of operation they wish to make.

!!! info "Choose your route"
    **Playing?** Start with the [Player Guide](../players/index.md).  
    **Building a mission?** Open [Mission Making](../mission-makers/index.md).  
    **Returning to the codebase?** Use the [Development quick reference](../technical/quick-reference.md).

## Design at a glance

| Principle | What it means |
|---|---|
| :material-puzzle-outline: **Modular** | Easy to enable and configure only components that are required |
| :material-server-network: **Multiplayer-aware** | Locality, persistence, JIP and server authourity are embedded. Hopefully. |
| :material-tune: **Configurable** | 3DEN to handle setup, ZEN for on-the-fly adjustment |
| :material-account-multiple-check: **Side-aware** | PvE remains simple while TvT systems can separate teams cleanly. |
| :material-book-open-page-variant: **Documented** | Player-facing and mission-making systems are cleanly defined |
