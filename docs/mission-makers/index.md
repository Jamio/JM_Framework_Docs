# Mission Making

A practical handbook for turning an idea into a reliable JM Framework operation—and controlling it once players are in the field.

<div class="grid cards" markdown>

-   :material-package-variant-closed:{ .lg .middle } **Install and start**

    ---

    Add JM Framework and its dependencies, prepare a mission, and understand the basic project structure.

    [:octicons-arrow-right-24: Installation and setup](getting-started.md)

-   :material-tune-variant:{ .lg .middle } **Configure components**

    ---

    Learn the intent behind each system, every Eden setting, recommended configurations, and the trade-offs behind them.

    [:octicons-arrow-right-24: Component catalogue](../components/index.md)

-   :material-lightning-bolt:{ .lg .middle } **Run it as Zeus**

    ---

    Use ZEN modules to inspect, recover, and change framework systems during a live operation.

    [:octicons-arrow-right-24: Zeus controls](../zeus/index.md)

</div>

## How component documentation works

Each component page is designed to answer the whole chain:

1. **Purpose** — the problem the component solves and the experience it is intended to create.
2. **Player experience** — what players see, the actions they use, and the rules they need to understand.
3. **Mission setup** — required modules, attributes, objects, dependencies, and working examples.
4. **Configuration** — what every option changes, when to use it, and its operational consequences.
5. **Zeus controls** — the ZEN modules and live adjustments available during the mission.
6. **Technical notes** — locality, persistence, events, compatibility, limitations, and troubleshooting.

!!! info "Eden defines the mission; Zeus adapts the live operation"
    Zeus controls are documented with the component they affect. They are presented as live management and recovery tools, not as a replacement for deliberate mission setup.
