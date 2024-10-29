import Card from '../components/Card'
import { projects } from "../constants";
import '../../src/index.css'

export default {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {}
}

export const Ecommerce = {
    args: {
        src: projects[0].src,
        name: projects[0].name,
        summary: projects[0].summary,
        links: projects[0].links,
        stacks: projects[0].stacks
    }
}

export const TwitterInspiredApp = {
    args: {
        src: projects[1].src,
        name: projects[1].name,
        summary: projects[1].summary,
        links: projects[1].links,
        stacks: projects[1].stacks
    }
}

export const WPFirebase = {
    args: {
        src: projects[2].src,
        name: projects[2].name,
        summary: projects[2].summary,
        links: projects[2].links,
        stacks: projects[2].stacks
    }
}

export const Docker = {
    args: {
        src: projects[3].src,
        name: projects[3].name,
        summary: projects[3].summary,
        links: projects[3].links,
        stacks: projects[3].stacks
    }
}