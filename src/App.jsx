import { useState, useRef } from "react";

// Quick Start / Tutorial
import QuickStart from "./examples/QuickStart";
import TicTacToe from "./examples/TicTacToe";

// Learn React examples
import DescribingUI from "./examples/DescribingUI";
import YourFirstComponent from "./examples/YourFirstComponent";
import ImportingExporting from "./examples/ImportingExporting";
import WritingMarkup from "./examples/WritingMarkup";
import JSXinCurlyBraces from "./examples/JSXinCurlyBraces";
import PassingProps from "./examples/PassingProps";
import ConditionalRendering from "./examples/ConditionalRendering";
import RenderingLists from "./examples/RenderingLists";
import KeepingComponentsPure from "./examples/KeepingComponentsPure";
import YourUIasTree from "./examples/YourUIasTree";
import RespondingToEvents from "./examples/RespondingToEvents";
import StateMemory from "./examples/StateMemory";
import RenderAndCommit from "./examples/RenderAndCommit";
import StateAsSnapshot from "./examples/StateAsSnapshot";
import QueueingStateUpdates from "./examples/QueueingStateUpdates";
import UpdatingObjectsInState from "./examples/UpdatingObjectsInState";
import UpdatingArraysInState from "./examples/UpdatingArraysInState";
import ReactingToInput from "./examples/ReactingToInput";
import ChoosingStateStructure from "./examples/ChoosingStateStructure";
import SharingState from "./examples/SharingState";
import PreservingResettingState from "./examples/PreservingResettingState";
import StateReducer from "./examples/StateReducer";
import ContextExample from "./examples/ContextExample";
import ReducerAndContext from "./examples/ReducerAndContext";
import ReferencingValuesWithRefs from "./examples/ReferencingValuesWithRefs";
import ManipulatingDOMWithRefs from "./examples/ManipulatingDOMWithRefs";
import SynchronizingWithEffects from "./examples/SynchronizingWithEffects";
import YouMightNotNeedEffect from "./examples/YouMightNotNeedEffect";
import LifecycleOfEffects from "./examples/LifecycleOfEffects";
import SeparatingEventsFromEffects from "./examples/SeparatingEventsFromEffects";
import RemovingEffectDependencies from "./examples/RemovingEffectDependencies";
import UseCounterHook from "./examples/UseCounterHook";

const sections = [
    { title: "Quick Start / Tutorial", components: [QuickStart, TicTacToe] },
    { title: "Describing the UI", components: [DescribingUI, YourFirstComponent, ImportingExporting, WritingMarkup, JSXinCurlyBraces, PassingProps, ConditionalRendering, RenderingLists, KeepingComponentsPure, YourUIasTree] },
    { title: "Adding Interactivity", components: [RespondingToEvents, StateMemory, RenderAndCommit, StateAsSnapshot, QueueingStateUpdates, UpdatingObjectsInState, UpdatingArraysInState] },
    { title: "Managing State", components: [ReactingToInput, ChoosingStateStructure, SharingState, PreservingResettingState, StateReducer, ContextExample, ReducerAndContext] },
    { title: "Escape Hatches", components: [ReferencingValuesWithRefs, ManipulatingDOMWithRefs, SynchronizingWithEffects, YouMightNotNeedEffect, LifecycleOfEffects, SeparatingEventsFromEffects, RemovingEffectDependencies, UseCounterHook] }
];

export default function App() {
    const [openSection, setOpenSection] = useState(null);
    const sectionRefs = sections.map(() => useRef(null));

    function scrollToSection(idx) {
        sectionRefs[idx].current.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function toggleSection(idx) {
        setOpenSection(openSection === idx ? null : idx);
    }

    return (
        <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>React Learn Examples</h1>

            {/* Навігація зверху */}
            <div style={{ marginBottom: "30px", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px" }}>
                {sections.map((section, idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollToSection(idx)}
                        style={{
                            padding: "8px 15px",
                            backgroundColor: "#1976d2",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            transition: "background 0.3s"
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#1565c0"}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#1976d2"}
                    >
                        {section.title}
                    </button>
                ))}
            </div>

            {/* Аккордеон */}
            {sections.map((section, idx) => (
                <div key={idx} ref={sectionRefs[idx]} style={{ marginBottom: "15px", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                    <button
                        onClick={() => toggleSection(idx)}
                        style={{
                            width: "100%",
                            padding: "15px",
                            fontSize: "18px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            textAlign: "left",
                            backgroundColor: "#1976d2",
                            color: "#fff",
                            border: "none",
                            outline: "none",
                            transition: "background 0.3s"
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#1565c0"}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#1976d2"}
                    >
                        {section.title}
                    </button>
                    {openSection === idx && (
                        <div style={{ padding: "15px", backgroundColor: "#f1f1f1" }}>
                            {section.components.map((Component, i) => (
                                <div key={i} style={{ marginBottom: "25px", padding: "10px", borderRadius: "5px", backgroundColor: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                                    <Component />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
