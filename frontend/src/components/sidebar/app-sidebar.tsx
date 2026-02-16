"use server"

import { UserButton } from "@daveyplate/better-auth-ui"
import {
    Sidebar, 
    SidebarContent, 
    SidebarFooter, 
    SidebarGroup, 
    SidebarGroupContent, 
    SidebarGroupLabel, 
    SidebarMenu 
    } from "../ui/sidebar"

import { User, Sparkles, Settings } from "lucide-react"
import Link from "next/link"

export default function AppSidebar() {
    return (
        <Sidebar className="from-background to-muted/20 border-r-0 bg-gradient-to-b">
            <SidebarContent className="px-3">
                <SidebarGroup>
                    
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
