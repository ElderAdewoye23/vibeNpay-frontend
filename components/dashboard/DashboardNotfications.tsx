"use client"
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { 
  Send, 
  Bitcoin, 
  MessageSquare, 
  DollarSign, 
  Bell, 
  Clock, 
  Check, 
  X,
  MoreVertical,
  Settings,
  Filter
} from 'lucide-react'


const notifications = [
  {
    id: 1,
    title: "Money Sent",
    description: "You sent $150 to Sarah Ahmed",
    time: "2 hours ago",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    icon: Send,
    iconColor: "text-red-500",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    type: "transaction",
    read: false,
    action: "View Transaction"
  },
  {
    id: 2,
    title: "Bitcoin Alert",
    description: "Bitcoin reached $45,000. Your target price alert triggered",
    time: "5 hours ago",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    icon: Bitcoin,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    type: "crypto",
    read: false,
    action: "View Details"
  },
  {
    id: 3,
    title: "New Message",
    description: "John Tech sent you a message",
    time: "1 day ago",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    icon: MessageSquare,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    type: "message",
    read: true,
    action: "Reply"
  },
  {
    id: 4,
    title: "Payment Received",
    description: "You received $50 from Emma Finance",
    time: "2 days ago",
    timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000),
    icon: DollarSign,
    iconColor: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    type: "payment",
    read: true,
    action: "View Details"
  },
  {
    id: 5,
    title: "System Update",
    description: "New security features have been added to your account",
    time: "3 days ago",
    timestamp: new Date(Date.now() - 72 * 60 * 60 * 1000),
    icon: Bell,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    type: "system",
    read: true,
    action: "Learn More"
  }
]

const notificationFilters = [
  { id: "all", label: "All", count: 5 },
  { id: "unread", label: "Unread", count: 2 },
  { id: "transaction", label: "Transactions", count: 2 },
  { id: "crypto", label: "Crypto", count: 1 },
  { id: "message", label: "Messages", count: 1 }
]

function DashboardNotifications() {
  const [activeFilter, setActiveFilter] = React.useState("all")
  const [notificationsList, setNotificationsList] = React.useState(notifications)

  const filteredNotifications = notificationsList.filter(notification => {
    if (activeFilter === "all") return true
    if (activeFilter === "unread") return !notification.read
    return notification.type === activeFilter
  })

  const markAsRead = (id: number) => {
    setNotificationsList(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    )
  }

  const markAllAsRead = () => {
    setNotificationsList(prev =>
      prev.map(notif => ({ ...notif, read: true }))
    )
  }

  const deleteNotification = (id: number) => {
    setNotificationsList(prev => prev.filter(notif => notif.id !== id))
  }

  const unreadCount = notificationsList.filter(n => !n.read).length

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Bell className="h-6 w-6" />
            Notifications
            {unreadCount > 0 && (
              <Badge variant="destructive" className="ml-2">
                {unreadCount} new
              </Badge>
            )}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Stay updated with your account activity
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
          >
            <Check className="h-4 w-4 mr-2" />
            Mark all as read
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b pb-4">
        {notificationFilters.map(filter => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveFilter(filter.id)}
            className="relative"
          >
            {filter.label}
            {filter.count > 0 && (
              <span className={`ml-2 px-1.5 py-0.5 text-xs rounded-full ${
                activeFilter === filter.id 
                  ? "bg-white/20" 
                  : "bg-gray-200 dark:bg-gray-700"
              }`}>
                {filter.count}
              </span>
            )}
          </Button>
        ))}
        <Button variant="ghost" size="sm" className="ml-auto">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification, index) => {
            const Icon = notification.icon
            
            return (
              <Card 
                key={notification.id} 
                className={`border overflow-hidden transition-all hover:shadow-md ${
                  !notification.read 
                    ? 'border-l-4 border-l-blue-500 bg-blue-50/50 dark:bg-blue-900/10' 
                    : ''
                }`}
              >
                <CardContent className="p-0">
                  <div className="flex items-start p-4 md:p-6">
                    {/* Icon */}
                    <div className={`p-3 rounded-lg ${notification.bgColor} mr-4`}>
                      <Icon className={`h-5 w-5 ${notification.iconColor}`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-lg">{notification.title}</h3>
                            {!notification.read && (
                              <Badge variant="default" className="h-2 w-2 p-0 rounded-full" />
                            )}
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mt-1">
                            {notification.description}
                          </p>
                          <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                            <Clock className="h-3 w-3" />
                            {notification.time}
                            
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex items-center gap-1 ml-4">
                          {!notification.read && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => markAsRead(notification.id)}
                              className="h-8 w-8"
                            >
                              <Check className="h-4 w-4" />
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteNotification(notification.id)}
                            className="h-8 w-8"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      {/* Action Button */}
                      <div className="mt-4">
                        <Button variant="outline" size="sm">
                          {notification.action}
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Separator */}
                  {index < filteredNotifications.length - 1 && (
                    <Separator />
                  )}
                </CardContent>
              </Card>
            )
          })
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <Bell className="h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No notifications</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {activeFilter === "unread" 
                  ? "You're all caught up! No unread notifications." 
                  : "No notifications found in this category."}
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Stats */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">{notificationsList.length}</div>
              <div className="text-sm text-gray-500">Total</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{unreadCount}</div>
              <div className="text-sm text-gray-500">Unread</div>
            </div>
            <div>
              <div className="text-2xl font-bold">
                {notificationsList.filter(n => n.type === 'transaction' || n.type === 'payment').length}
              </div>
              <div className="text-sm text-gray-500">Transactions</div>
            </div>
            <div>
              <div className="text-2xl font-bold">
                {notificationsList.filter(n => n.type === 'message').length}
              </div>
              <div className="text-sm text-gray-500">Messages</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default DashboardNotifications