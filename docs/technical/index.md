# Development

The design record and technical reference for JM Framework: why it is built this way, how its pieces fit together, and where it goes next.

<div class="grid cards" markdown>

-   :material-compass-outline:{ .lg .middle } **Intent and philosophy**

    ---

    Read the principles guiding component boundaries, configurability, multiplayer behaviour, Eden integration, and Zeus support.

    [:octicons-arrow-right-24: Design philosophy](architecture.md)

-   :material-code-braces:{ .lg .middle } **Technical reference**

    ---

    Explore configuration, public events, APIs, compatibility, architecture, and troubleshooting information.

    [:octicons-arrow-right-24: Events and API](events-api.md)

-   :material-source-branch:{ .lg .middle } **Project direction**

    ---

    Follow released changes, work in progress, future components, design questions, and ideas still being explored.

    [:octicons-arrow-right-24: Roadmap and ideas](../development/roadmap.md)

</div>

## Development principles

- Components should be modular, side-aware where practical, and independently useful.
- Eden configuration should be approachable without hiding meaningful consequences.
- ZEN modules should support live adjustment, recovery, and troubleshooting.
- CBA and ACE conventions should be followed for events, settings, interactions, and initialization.
- Multiplayer locality and persistence are design inputs, not final-stage fixes.
- Documentation should distinguish **released**, **in development**, and **planned** behaviour.

Component-specific implementation details belong on the relevant [component page](../components/index.md); this section holds the shared architecture and project-wide decisions.
