# Roadmap and Ideas

This page records direction without presenting every idea as a promise.

<div class="grid cards" markdown>

-   :material-check-decagram:{ .lg .middle } **Current**

    ---

    Stabilise the addon structure, complete the Aid Station vertical slice, establish documentation patterns, and validate multiplayer behaviour.

-   :material-hammer-wrench:{ .lg .middle } **Next**

    ---

    Rally Points, redeployment, role-aware arsenals, tickets and respawn, garages, vehicle support, and stronger Zeus tooling.

-   :material-lightbulb-on-outline:{ .lg .middle } **Exploring**

    ---

    Civilian interaction and intel, module-driven AI spawning, minefields, safezones, AO limits, custom objects, logistics, and vehicle loadout allocation.

</div>

## Design questions

Ideas remain here while their player experience, Mission Maker workflow, locality model, and maintenance cost are still being worked through.

A feature should normally move into active development only when we can answer:

1. What problem does it solve during an operation?
2. Which parts belong in Eden, Zeus, or player interactions?
3. Does it work cleanly for PvE and side-aware missions?
4. What state must persist or synchronize?
5. Can it remain independent from spawning and other unrelated components?
6. How will a Mission Maker understand and troubleshoot it?

!!! warning "Planned does not mean released"
    Roadmap items may change, merge, or be dropped as the framework is tested.
