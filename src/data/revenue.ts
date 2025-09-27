export const premiumServices = [
    {
      id: 'swot-analysis',
      title: 'premium_services.swot_title',
      price: 'premium_services.swot_price',
      features: [
        'premium_services.swot_feature1',
        'premium_services.swot_feature2',
        'premium_services.swot_feature3'
      ],
      icon: 'BarChart3'
    },
    {
      id: 'route-optimization',
      title: 'premium_services.route_title',
      price: 'premium_services.route_price',
      features: [
        'premium_services.route_feature1',
        'premium_services.route_feature2',
        'premium_services.route_feature3'
      ],
      icon: 'Map'
    },
    {
      id: 'consulting',
      title: 'premium_services.consulting_title',
      price: 'premium_services.consulting_price',
      features: [
        'premium_services.consulting_feature1',
        'premium_services.consulting_feature2',
        'premium_services.consulting_feature3'
      ],
      icon: 'Briefcase'
    }
];

export const revenueData = {
    monthly: {
      subscriptions: 25000000,
      services: 15000000,
      commissions: 5000000,
      total: 45000000
    },
    growth: 25
};

export const chartData = [
  { name: 'فروردین', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'اردیبهشت', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'خرداد', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'تیر', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'مرداد', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'شهریور', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'مهر', uv: 3490, pv: 4300, amt: 2100 },
];

export const topServices = [
    { name: 'premium_services.swot_title', revenue: 8500000 },
    { name: 'premium_services.consulting_title', revenue: 4500000 },
    { name: 'premium_services.route_title', revenue: 2000000 },
];
