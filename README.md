# JM Framework Documentation

The official handbook for **JM Framework** and the **Misfits Arma 3 community**.

[Open the documentation site](https://jamio.github.io/JM_Framework_Docs/)

> [!NOTE]
> The framework and its documentation are in active development. Pages marked as planned may describe intended rather than released functionality.

## Documentation structure

### Player Guide

Practical guidance from joining the community through to playing an operation:

- Preparing for missions and reading briefings
- Selecting roles
- ACE interactions and medical
- TFAR communications
- Teamwork and communication expectations
- Using JM Framework systems such as aid stations, rally points, redeployment, arsenals, tickets, and respawn

### Mission Making

Detailed guidance for building and running missions with JM Framework:

- Installation and initial mission setup
- Eden modules and attributes
- Component-by-component configuration
- Recommended settings and design trade-offs
- Side-aware and TvT missions
- Zeus and ZEN controls for live operations
- Troubleshooting

### Development

The design and technical record for the framework:

- Design philosophy and architecture
- Configuration model
- Events and public APIs
- Compatibility
- Changelog
- Roadmap and future ideas
- Contribution guidance

## Documentation approach

Each framework component has one authoritative reference page. Where applicable, that page explains:

1. The component's purpose and intended experience
2. What players see and do
3. Mission Maker setup and configuration
4. Zeus controls and live adjustment
5. Technical behaviour, locality, events, limitations, and troubleshooting

This keeps player, Mission Maker, Zeus, and developer information connected without maintaining conflicting copies.

## Local development

Install the pinned documentation dependency and run the development server:

```bash
pip install -r requirements.txt
mkdocs serve
```

The site is built with [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) and deployed to GitHub Pages through the repository's **Deploy documentation** workflow.

## Related repository

- [JM Framework](https://github.com/Jamio/JM_Framework) — framework source code
