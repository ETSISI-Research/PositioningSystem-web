<div id="wrapper">
    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/admin">Positioning System</a>
        </div>
        <!-- Top Menu Items -->
        <ul class="nav navbar-right top-nav">
            <li class="dropdown" ng-controller="MessagesController" ng-init="getUnreadMessages()">
                <a href="" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-envelope"></i> <b class="caret"></b></a>
                <ul class="dropdown-menu message-dropdown">
                    <li class="message-preview" ng-repeat="message in messages">
                        <a href="#">
                            <div class="media">
                                <div class="media-body">
                                    <h5 class="media-heading"><strong>{{message.subject}}</strong>
                                    </h5>
                                    <p class="small text-muted"><i class="fa fa-clock-o"></i> {{message.date.date}}</p>
                                    <p>{{message.message}}</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="message-footer">
                        <a href="/inbox">View all messages</a>
                    </li>
                </ul>
            </li>
            <li class="dropdown" ng-controller="ContactsController" ng-init="getContactRequests()">
                <a href="" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-bell"></i> <b class="caret"></b></a>
                <ul class="dropdown-menu alert-dropdown"  ng-if="contactRequests.length > 0">
                    <li>
                        <a href="/contacts/requests">Contact requests <span class="label label-primary">{{contactRequests.length}}</span></a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="#">View All</a>
                    </li>
                </ul>
                <ul class="dropdown-menu alert-dropdown"  ng-if="contactRequests.length == 0">
                    <li><a href="/admin">You don't have alerts</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="" class="dropdown-toggle" data-toggle="dropdown" ng-controller="LoginController"><i class="fa fa-user"></i> {{email}}<b class="caret"></b></a>
                <ul class="dropdown-menu">
                    <li>
                        <a href="/profile"><i class="fa fa-fw fa-user"></i> Profile</a>
                    </li>
                    <li>
                        <a href="/inbox"><i class="fa fa-fw fa-envelope"></i> Inbox</a>
                    </li>
                    <li>
                        <a href="/settings"><i class="fa fa-fw fa-gear"></i> Settings</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="#" ng-click="logout()"><i class="fa fa-fw fa-power-off"></i> Log Out</a>
                    </li>
                </ul>
            </li>
        </ul>
        <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
        <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav side-nav">
                <li>
                    <a href="/admin"><i class="fa fa-fw fa-dashboard"></i> Dashboard</a>
                </li>
                <li>
                    <a href="projects"><i class="fa fa-fw fa-bar-chart-o"></i> My Projects</a>
                </li>
                <li>
                    <a href="projects/others"><i class="fa fa-fw fa-bar-chart-o"></i> Other's Projects</a>
                </li>
                <li>
                    <a href="partners"><i class="fa fa-fw fa-bar-chart-o"></i> Partners</a>
                </li>
                <li>
                    <a href="/inbox"><i class="fa fa-fw fa-table"></i> Messages</a>
                </li>
                <li>
                    <a href="javascript:;" data-toggle="collapse" data-target="#demo"><i class="fa fa-fw fa-arrows-v"></i> Contacts <i class="fa fa-fw fa-caret-down"></i></a>
                    <ul id="demo" class="collapse">
                        <li>
                            <a href="/contacts">Contact List</a>
                        </li>
                        <li>
                            <a href="contacts/add">Add Contact</a>
                        </li>
                        <li>
                            <a href="contacts/requests">Pending Requests</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </nav>
