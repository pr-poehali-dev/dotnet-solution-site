import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Code2" size={32} className="text-blue-600" />
              <span className="text-xl font-bold text-slate-800 font-roboto">.NET Solutions</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#expertise" className="text-slate-700 hover:text-blue-600 transition-colors">Экспертиза</a>
              <a href="#cases" className="text-slate-700 hover:text-blue-600 transition-colors">Кейсы</a>
              <a href="#team" className="text-slate-700 hover:text-blue-600 transition-colors">Команда</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Связаться</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Начать проект
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <Badge variant="secondary" className="mb-4 text-blue-600 bg-blue-100">
              Enterprise .NET разработка
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Создаем <span className="text-blue-600">мощные</span><br />
              .NET решения
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Разрабатываем масштабируемые enterprise приложения, веб-системы и микросервисы 
              на платформе .NET с использованием современных технологий
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700">
              <Icon name="Rocket" size={20} className="mr-2" />
              Обсудить проект
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-slate-300">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть кейсы
            </Button>
          </div>

          {/* Tech Stack */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: '.NET Core', icon: 'Zap' },
              { name: 'C#', icon: 'Code' },
              { name: 'SQL Server', icon: 'Database' },
              { name: 'Azure', icon: 'Cloud' }
            ].map((tech, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Icon name={tech.icon} size={40} className="mx-auto mb-3 text-blue-600" />
                  <p className="font-semibold text-slate-700">{tech.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Наша экспертиза</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Специализируемся на полном цикле разработки .NET решений для бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Enterprise приложения',
                description: 'Крупные корпоративные системы с высокой нагрузкой',
                icon: 'Building2',
                color: 'blue'
              },
              {
                title: 'Веб-системы',
                description: 'Современные веб-приложения на ASP.NET Core',
                icon: 'Globe',
                color: 'green'
              },
              {
                title: 'API и микросервисы',
                description: 'RESTful API и архитектура микросервисов',
                icon: 'Network',
                color: 'purple'
              },
              {
                title: 'Десктопные приложения',
                description: 'WPF и WinForms приложения для Windows',
                icon: 'Monitor',
                color: 'orange'
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-slate-200">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-${service.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon} size={24} className={`text-${service.color}-600`} />
                  </div>
                  <CardTitle className="text-lg text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Успешные кейсы</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Реализованные проекты, которые помогли бизнесу достичь целей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'ERP система для производства',
                description: 'Автоматизация производственных процессов',
                tech: ['.NET Core', 'SQL Server', 'Angular'],
                metrics: '40% ↑ эффективность'
              },
              {
                title: 'E-commerce платформа',
                description: 'Масштабируемый интернет-магазин',
                tech: ['ASP.NET', 'Redis', 'Azure'],
                metrics: '300% ↑ продажи'
              },
              {
                title: 'CRM для финансов',
                description: 'Система управления клиентами',
                tech: ['WPF', '.NET Framework', 'Oracle'],
                metrics: '60% ↓ время обработки'
              }
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-slate-200 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <Icon name="Code2" size={60} className="text-white opacity-80" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">{project.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-green-600">{project.metrics}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Наша команда</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Опытные .NET разработчики с экспертизой в enterprise решениях
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <img 
              src="/img/707bf2cc-755d-46b1-a371-a3ddc5be198b.jpg" 
              alt="Команда разработчиков" 
              className="rounded-2xl shadow-2xl max-w-4xl w-full h-96 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Алексей Петров',
                role: 'Lead .NET Developer',
                experience: '8+ лет опыта',
                specialization: 'Enterprise архитектура'
              },
              {
                name: 'Мария Сидорова',
                role: 'Senior Backend Developer',
                experience: '6+ лет опыта',
                specialization: 'Микросервисы и API'
              },
              {
                name: 'Дмитрий Иванов',
                role: 'DevOps Engineer',
                experience: '5+ лет опыта',
                specialization: 'Azure и CI/CD'
              }
            ].map((member, index) => (
              <Card key={index} className="text-center border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" size={32} className="text-blue-600" />
                  </div>
                  <CardTitle className="text-lg text-slate-900">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-2">{member.experience}</p>
                  <p className="text-sm text-slate-500">{member.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы начать проект?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Обсудим ваши задачи и предложим оптимальное .NET решение
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться с нами
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-slate-600 text-white hover:bg-slate-800">
              <Icon name="Calendar" size={20} className="mr-2" />
              Забронировать встречу
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Icon name="Mail" size={24} className="mx-auto mb-3 text-blue-400" />
              <p className="text-slate-300">info@dotnet-solutions.ru</p>
            </div>
            <div className="text-center">
              <Icon name="Phone" size={24} className="mx-auto mb-3 text-blue-400" />
              <p className="text-slate-300">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center">
              <Icon name="MapPin" size={24} className="mx-auto mb-3 text-blue-400" />
              <p className="text-slate-300">Москва, БЦ "Технопарк"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 .NET Solutions. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;