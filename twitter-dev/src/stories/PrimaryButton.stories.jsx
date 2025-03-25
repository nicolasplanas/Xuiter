import { Component } from "react";
import PrimaryButton from "../components/PrimaryButton";

export default {
    Component: PrimaryButton,
    tags: ['autodocs']
}

export const Default = {
    args: {
        label: 'Hello'
    }
}

export const Primary = {
    args: {
        label: 'Hello',
        variant: 'outlined',
        size: 'md'
    }
}

export const PrimarySolid = {
    args: {
        label: 'Hello',
        variant: 'solid',
        size: 'md'
    }
}