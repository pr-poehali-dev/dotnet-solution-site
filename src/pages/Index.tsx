import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">.NET</span>
              </div>
              <span className="text-xl font-bold text-slate-800">Александр Петров</span>
              <Badge variant="secondary" className="text-xs text-blue-600 bg-blue-100">
                Senior .NET Developer
              </Badge>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">О себе</a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#technologies" className="text-slate-700 hover:text-blue-600 transition-colors">Технологии</a>
              <a href="#portfolio" className="text-slate-700 hover:text-blue-600 transition-colors">Портфолио</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Контакты</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Обсудить проект
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="secondary" className="mb-4 text-blue-600 bg-blue-100">
                  8+ лет опыта в .NET разработке
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Создаю <span className="text-blue-600">надежные</span><br />
                  .NET решения
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Специализируюсь на разработке enterprise приложений, веб-систем и API 
                  на платформе .NET. Помогаю бизнесу автоматизировать процессы и 
                  масштабировать IT-инфраструктуру.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Связаться со мной
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-slate-300">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать резюме
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                  <div className="text-sm text-slate-600">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">8+</div>
                  <div className="text-sm text-slate-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">25+</div>
                  <div className="text-sm text-slate-600">Клиентов</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/img/a210a591-92d9-40fe-9c87-337a3893190d.jpg" 
                  alt="Рабочее место .NET разработчика" 
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Мои услуги</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Полный спектр .NET разработки от консультации до внедрения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Enterprise приложения',
                description: 'Разработка масштабируемых корпоративных систем с высокой производительностью',
                icon: 'Building2',
                features: ['ERP системы', 'CRM решения', 'Автоматизация бизнес-процессов']
              },
              {
                title: 'Веб-приложения',
                description: 'Современные веб-системы на ASP.NET Core с адаптивным интерфейсом',
                icon: 'Globe',
                features: ['SPA приложения', 'E-commerce платформы', 'Порталы и панели управления']
              },
              {
                title: 'API и микросервисы',
                description: 'RESTful API и архитектура микросервисов для интеграции систем',
                icon: 'Network',
                features: ['REST API', 'GraphQL', 'Микросервисная архитектура']
              },
              {
                title: 'Desktop приложения',
                description: 'Нативные Windows приложения с современным интерфейсом',
                icon: 'Monitor',
                features: ['WPF приложения', 'WinForms', 'Cross-platform с .NET MAUI']
              },
              {
                title: 'Миграция и модернизация',
                description: 'Перенос legacy систем на современную платформу .NET',
                icon: 'RefreshCw',
                features: ['Миграция на .NET Core', 'Рефакторинг кода', 'Оптимизация производительности']
              },
              {
                title: 'Консультации и аудит',
                description: 'Техническая экспертиза и анализ архитектуры проектов',
                icon: 'Search',
                features: ['Code review', 'Архитектурный аудит', 'Техническое консультирование']
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-slate-200 h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={24} className="text-blue-600" />
                  </div>
                  <CardTitle className="text-lg text-slate-900">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Технологический стек</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Современные технологии для создания качественных решений
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <Icon name="Code2" size={20} className="mr-2 text-blue-600" />
                Backend
              </h3>
              <div className="space-y-3">
                {['.NET Core/.NET Framework', 'C#', 'ASP.NET Core', 'Entity Framework', 'Dapper', 'SignalR'].map((tech, index) => (
                  <Badge key={index} variant="secondary" className="block w-fit text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <Icon name="Database" size={20} className="mr-2 text-blue-600" />
                Базы данных
              </h3>
              <div className="space-y-3">
                {['SQL Server', 'PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'SQLite'].map((tech, index) => (
                  <Badge key={index} variant="secondary" className="block w-fit text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <Icon name="Cloud" size={20} className="mr-2 text-blue-600" />
                Облако и DevOps
              </h3>
              <div className="space-y-3">
                {['Azure', 'AWS', 'Docker', 'Kubernetes', 'Azure DevOps', 'GitHub Actions'].map((tech, index) => (
                  <Badge key={index} variant="secondary" className="block w-fit text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <Icon name="Layers" size={20} className="mr-2 text-blue-600" />
                Frontend
              </h3>
              <div className="space-y-3">
                {['React', 'Angular', 'Blazor', 'JavaScript/TypeScript', 'HTML/CSS', 'Bootstrap'].map((tech, index) => (
                  <Badge key={index} variant="secondary" className="block w-fit text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Портфолио проектов</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Реализованные проекты с измеримыми результатами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Система управления производством',
                category: 'Enterprise ERP',
                description: 'Комплексная автоматизация производственных процессов для металлургического предприятия',
                tech: ['.NET Core', 'SQL Server', 'SignalR', 'Angular'],
                metrics: ['50% ↓ время обработки заказов', '30% ↑ производительность', '90% ↓ ошибок планирования'],
                status: 'Запущен в продакшн'
              },
              {
                title: 'Платформа электронной коммерции',
                category: 'E-commerce',
                description: 'Высоконагруженная платформа для онлайн-торговли с микросервисной архитектурой',
                tech: ['ASP.NET Core', 'Redis', 'Azure', 'React'],
                metrics: ['1M+ пользователей', '99.9% uptime', '200ms средний отклик'],
                status: 'Активно развивается'
              },
              {
                title: 'CRM система для банка',
                category: 'Financial CRM',
                description: 'Система управления клиентами с интеграцией в банковские системы',
                tech: ['WPF', '.NET Framework', 'Oracle', 'WCF'],
                metrics: ['60% ↓ время обработки заявок', '40% ↑ конверсия', '95% удовлетворенность клиентов'],
                status: 'Успешно внедрена'
              },
              {
                title: 'API для мобильного банкинга',
                category: 'Mobile API',
                description: 'Безопасное API для мобильного приложения банка с высокой производительностью',
                tech: ['.NET Core', 'JWT', 'PostgreSQL', 'Docker'],
                metrics: ['500K+ API запросов/день', '150ms среднее время ответа', 'A+ безопасность'],
                status: 'Стабильно работает'
              },
              {
                title: 'Система документооборота',
                category: 'Document Management',
                description: 'Электронный документооборот для государственного учреждения',
                tech: ['ASP.NET MVC', 'Entity Framework', 'SQL Server', 'jQuery'],
                metrics: ['80% ↓ время согласования', '100% цифровизация процессов', '500+ пользователей'],
                status: 'Внедрена и поддерживается'
              },
              {
                title: 'Аналитическая платформа',
                category: 'Business Intelligence',
                description: 'Система бизнес-аналитики для розничной сети с real-time отчетностью',
                tech: ['.NET Core', 'Power BI', 'Azure SQL', 'SignalR'],
                metrics: ['Real-time аналитика', '200+ отчетов', '99.5% точность данных'],
                status: 'Активно используется'
              }
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-slate-200 overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs text-blue-600 bg-blue-50">
                      {project.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs text-green-600 border-green-200">
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-slate-900">{project.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-900 mb-2">Технологии:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-slate-900 mb-2">Результаты:</h4>
                      <ul className="space-y-1">
                        {project.metrics.map((metric, metricIndex) => (
                          <li key={metricIndex} className="flex items-center text-xs text-slate-600">
                            <Icon name="TrendingUp" size={12} className="text-green-500 mr-1 flex-shrink-0" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Давайте обсудим ваш проект</h2>
              <p className="text-xl text-slate-300 mb-8">
                Готов помочь с .NET разработкой любой сложности. 
                Свяжитесь со мной для обсуждения деталей.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-slate-300">alex.petrov.dev@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-slate-300">+7 (985) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Github" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-slate-300">github.com/alex-petrov-dev</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Linkedin" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-slate-300">linkedin.com/in/alex-petrov-dotnet</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-slate-700 bg-slate-800">
                <CardHeader>
                  <CardTitle className="text-white">Отправить сообщение</CardTitle>
                  <CardDescription className="text-slate-300">
                    Расскажите о вашем проекте, и я свяжусь с вами в течение 24 часов
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">Имя</label>
                      <Input placeholder="Ваше имя" className="bg-slate-700 border-slate-600 text-white" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">Email</label>
                      <Input type="email" placeholder="your@email.com" className="bg-slate-700 border-slate-600 text-white" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-slate-300 mb-2 block">Тип проекта</label>
                    <select className="w-full h-10 px-3 rounded-md bg-slate-700 border border-slate-600 text-white">
                      <option>Веб-приложение</option>
                      <option>Enterprise система</option>
                      <option>API и микросервисы</option>
                      <option>Desktop приложение</option>
                      <option>Миграция/модернизация</option>
                      <option>Консультация</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-slate-300 mb-2 block">Бюджет</label>
                    <select className="w-full h-10 px-3 rounded-md bg-slate-700 border border-slate-600 text-white">
                      <option>До 500 000 ₽</option>
                      <option>500 000 - 1 000 000 ₽</option>
                      <option>1 000 000 - 3 000 000 ₽</option>
                      <option>Свыше 3 000 000 ₽</option>
                      <option>Обсудим индивидуально</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-slate-300 mb-2 block">Описание проекта</label>
                    <Textarea 
                      placeholder="Расскажите подробнее о вашем проекте, требованиях и ожиданиях..."
                      className="bg-slate-700 border-slate-600 text-white min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Александр Петров. Senior .NET Developer. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;