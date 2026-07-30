<div class="jmf-page-hero" style="--jmf-page-image: url('../assets/images/mission-making.jpg');" markdown>
<span class="jmf-eyebrow">MISSION MAKING</span>
# From Concept to Operation
Plan, build, configure, and validate reliable JM Framework missions.
</div>

<!-- Optional header image: docs/assets/images/mission-making.jpg -->

The Mission Making guide follows the same order as building an operation: begin with the experience, design the mission around it, configure JM Framework to support it, then prove the result works.

<div class="grid cards" markdown>

-   :material-lightbulb-on:{ .lg .middle } **Mission concept**

    ---

    Shape the initial idea, set a sensible scope, avoid common pitfalls, and establish the basic mission.

    [:octicons-arrow-right-24: Start with the idea](concept/index.md)

-   :material-map-marker-path:{ .lg .middle } **Mission design**

    ---

    Plan context, objectives, roles, loadouts, opposition, mission flow, and meaningful outcomes.

    [:octicons-arrow-right-24: Design the operation](design/index.md)

-   :material-hammer-wrench:{ .lg .middle } **JM Framework**

    ---

    Install the framework, complete the core setup, and configure only the components the mission needs.

    [:octicons-arrow-right-24: Build with the framework](framework/index.md)

-   :material-check-decagram:{ .lg .middle } **Testing and validation**

    ---

    Test locally, rehearse multiplayer behaviour, validate on the dedicated server, and prepare fallbacks.

    [:octicons-arrow-right-24: Validate the mission](testing/index.md)

</div>

## How to use this guide

You do not need to complete every page for every operation. Use the guide as a set of design checks:

1. Write down the concept and constraints.
2. Plan what players will know, do, and experience.
3. Build a reliable mission flow with recoverable failure paths.
4. Configure JM Framework components around that design.
5. Test the mission as a player, Zeus, and multiplayer host.
6. Complete the final validation checklist before operation night.

!!! info "Eden defines the mission; Zeus adapts it"
    Each framework component page explains both its planned Eden configuration and its Zeus/ZEN controls. Zeus functionality is documented as live adjustment, recovery, and escalation—not as a substitute for mission setup.

## Writing this section

Every page contains comments showing where to add your final text, screenshots, diagrams, examples, and links. Optional header image filenames are also listed directly beneath each page banner.
