/* eslint-disable */

const ProductStyles = () =>
    function (values) {
        return `
        * {
            box-sizing: border-box;
        }
        table {
            box-sizing: border-box;
            border-collapse: collapse;
            border-spacing: 0;
            border: none;
        }
        td {
            padding: 0;
        }
        .products-grid {
            gap: 20px;
            flex-wrap: wrap;
        }
        .products-grid.two-columns {
            display: flex;
            gap: 15px;
        }
        .products-grid.two-columns .product-card {
            width: calc(50% - 8px);
        }
        
        .products-grid.two-columns--reverse {
            display: flex;
            gap: 15px;
        }
        .products-grid.two-columns--reverse  .product-card {
             width: calc(50% - 8px);
        }
        .products-grid.two-columns--reverse  .product-card:nth-child(odd) .product-card__inner {
             order: -1;
             padding-top: 15px;
        }
        
        .products-grid.three-columns {
            display: flex;
            gap: 10px;
        }
        .products-grid.three-columns  .product-card {
             width: calc(33.33333% - 7px);
        }
        
        .product-card {
          position: relative;
          gap: 15px;
          min-width: 0;
          word-wrap: break-word;
          background-color: #fff;
          background-clip: border-box;
          border: 1px solid rgba(0,0,0,.125);
          border-radius: .25rem;
          text-align: center;
          display: flex;
          flex-direction: column;
        }
        .product-card__inner {
            padding: 0 10px;
        }

        .product-card-body {
          padding: 0 1rem 1rem;
          text-align: left;
        }

        .product-card-body h3 {
          margin: 0.7rem 0;
        }

        .product-card img {
          max-width: 100%;
          object-fit: contain;
          border-top-left-radius: 0.25rem;
          border-top-right-radius: 0.25rem;
        }
        
        .product-title {
            text-align: center;
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 15px;
        }
         .products-grid.two-columns .product-title,
         .products-grid.two-columns--reverse .product-title {
            font-size: 19px;
         }
         .products-grid.three-columns .product-title {
            font-size: 14px;
         }
        
        .product-price {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 15px;
        }
        .price-old {
            color: #98A2B3;
            text-decoration: line-through;
        }
        .price {
            margin-bottom: 15px;
        }
         
       
        .products-grid.three-columns .product-description {
            font-size: 12px;
         }
        
        .product-card .product-footer {
          display: flex;
          justify-content: center;
          padding: 15px;
          align-items: center;
          font-weight: bold;
        }

        .product-card .product-footer > div, .product-card .product-footer > .button{
          width: 200px;
          max-width: 100%;
        }

        .product-card .product-footer > div {
          border-bottom-left-radius: 0.25rem;
        }

        .button {
          font-weight: 400;
          color: #ffffff;
          text-align: center;
          vertical-align: middle;
          background-color: #000;
          border: 1px solid #0c54c9;
          border-radius: 8px;
          padding: .75rem;
          font-size: 1rem;
          line-height: 1.5;
          transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
          cursor: pointer;
        }

        .m-0 {
          margin: 0px;
        }

        .no-underline {
          text-decoration: none !important;
        }

        .no-border-radius {
          border-radius: 0px;
        }
        
        .product-details-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        
        .details-item {
          width: 50%;
        }
        
        .details-item label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
          font-size: 14px;
          color: #344054;
        }
        
        .product-type {
            text-align: left;
            color: #344054;
            font-size: 16px;
            padding: 5px 15px;
        }
        .product-description {
            line-height: 175%;
        }
        
        
        .selectMultiple {
             width:100%;
             position: relative;
        }
         .selectMultiple select {
            display: none;
        }
        .selectMultiple .active {
           cursor: pointer;
           display: flex;
           align-items: center;
           flex-wrap: wrap;
        }
      
         .selectMultiple > div {
             position: relative;
             z-index: 2;
             padding: 8px 26px 2px 12px;
             background: #fff;
             font-size: 14px;
             font-weight: 500;
             min-height: 40px;
             color: #344054;
             box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
             border-radius: 6px;
             border: 1px solid #D0D5DD;
             transition: box-shadow 0.3s ease;
        }
         .selectMultiple > div:hover {
            box-shadow: 0 4px 24px -1px rgba(22, 42, 90, .16);
        }
         .selectMultiple > div .arrow {
             right: 1px;
             top: 0;
             bottom: 0;
             cursor: pointer;
             width: 28px;
             position: absolute;
        }
         .selectMultiple > div .arrow:before, .selectMultiple > div .arrow:after {
             content: '';
             position: absolute;
             display: block;
             width: 2px;
             height: 8px;
             border-bottom: 8px solid #344054;
             top: 43%;
             transition: all 0.3s ease;
        }
         .selectMultiple > div .arrow:before {
             right: 12px;
             transform: rotate(-130deg);
        }
         .selectMultiple > div .arrow:after {
             left: 9px;
             transform: rotate(130deg);
        }
         .selectMultiple > div span {
             color: #99a3ba;
             display: block;
             position: absolute;
             left: 12px;
             cursor: pointer;
             top: 9px;
             transition: all 0.1s ease;
             pointer-events: none;
        }
         .selectMultiple > div span.hide {
             opacity: 0;
             visibility: hidden;
             transform: translate(-4px, 0);
        }
         .selectMultiple > div a {
             position: relative;
             padding: 0 19px 6px 8px;
             line-height: 28px;
             color: #1e2330;
             display: block;
             vertical-align: top;
             margin: 0 6px 0 0;
             width: 100%;
        }
         .selectMultiple > div a em {
             font-style: normal;
             display: block;
             white-space: nowrap;
        }
         .selectMultiple > div a:before {
             content: '';
             left: 0;
             top: 0;
             bottom: 6px;
             width: 100%;
             position: absolute;
             display: block;
             background: rgba(228, 236, 250, .7);
             z-index: -1;
             border-radius: 4px;
        }
         .selectMultiple > div a i {
             cursor: pointer;
             position: absolute;
             top: 0;
             right: 0;
             width: 24px;
             height: 28px;
             display: block;
        }

         .selectMultiple > div a i:before, .selectMultiple > div a i:after {
             content: '';
             display: block;
             width: 2px;
             height: 10px;
             position: absolute;
             left: 50%;
             top: 50%;
             background: #0b68ff;
             border-radius: 1px;
        }
         .selectMultiple > div a i:before {
            transform: translate(-50%, -50%) rotate(45deg);
        }
         .selectMultiple > div a i:after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
         .selectMultiple > ul {
             margin: 0;
             padding: 0;
             list-style: none;
             font-size: 16px;
             z-index: 1;
             position: absolute;
             top: 100%;
             left: 0;
             right: 0;
             visibility: hidden;
             opacity: 0;
             border-radius: 8px;
             transform: translate(0, 20px) scale(0.8);
             transform-origin: 0 0;
             box-shadow: 0 12px 20px rgba(22, 42, 90, .08);
             transition: all 0.4s ease, transform 0.4s cubic-bezier(0.87, -0.41, 0.19, 1.44), filter 0.3s ease 0.2s;
             z-index: 3;
             max-height: 200px;
             overflow-y: scroll;
        }
        
        .selectMultiple > ul .list-item {
          color: #1e2330;
          background: #fff;
          padding: 12px 16px;
          cursor: pointer;
          overflow: hidden;
          position: relative;
          transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease 0.3s, opacity 0.5s ease 0.3s, border-radius 0.3s ease;
          &.hide {
            display: none;
          }
        }
        
        .selectMultiple > ul .search-item {
          padding: 0 16px;
          background: #fff;
          position: relative;
          border-bottom: 1px solid #D0D5DD;
        }
        
        .selectMultiple > ul .search-item input {
          border: none;
          height: 37px;
          padding: 0 10px 0 25px;
          font-size: 14px;
          width: 100%;
          outline: none;
        }
        .selectMultiple > ul .search-item svg {
          position: absolute;
          left: 15px;
          top: 9px;
        }
        
        .selectMultiple > ul li.hide {
            display: none;
        }
         .selectMultiple > ul li:first-child {
            border-radius: 8px 8px 0 0;
        }
         .selectMultiple > ul li:first-child:last-child {
            border-radius: 8px;
        }
         .selectMultiple > ul li:last-child {
            border-radius: 0 0 8px 8px;
        }
         .selectMultiple > ul li:last-child:first-child {
            border-radius: 8px;
        }
         .selectMultiple > ul .list-item:hover {
             background: #0b68ff;
             color: #fff;
        }
         .selectMultiple > ul li:after {
             content: '';
             position: absolute;
             top: 50%;
             left: 50%;
             width: 6px;
             height: 6px;
             background: rgba(0, 0, 0, .4);
             opacity: 0;
             border-radius: 100%;
             transform: scale(1, 1) translate(-50%, -50%);
             transform-origin: 50% 50%;
        }
         .selectMultiple.open > div {
            box-shadow: 0 4px 20px -1px rgba(22, 42, 90, .12);
        }
         .selectMultiple.open > div .arrow:before {
            transform: rotate(-50deg);
        }
         .selectMultiple.open > div .arrow:after {
            transform: rotate(50deg);
        }
         .selectMultiple.open > ul {
             transform: translate(0, 12px) scale(1);
             opacity: 1;
             visibility: visible;
             filter: drop-shadow(0 16px 24px rgba(22, 42, 90, .16));
        }
        .layout-list {
            display: flex;
            align-items: center;
            gap: 16px
        }
        .layout-list label {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            padding: 5px;
            border: 1px solid #D0D5DD;
            border-radius: 6px;
            cursor: pointer;
            overflow: hidden;
        }
        .layout-list img {
            max-width: 100%;
            position: relative;
            z-index: 2;
        }
        .layout-list label span {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            transition: all 0.3s ease-in-out;
        }
        .layout-list label.disabled {
           pointer-events: none;
           opacity: 0.6;
        }
        .layout-list input {
            width: 0;
            height: 0;
            opacity: 0;
        }
        .layout-list input:checked + span {
            background: #F4FAFF;
        }
        .font-styles__row {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        .font-styles__item {
            width: 30px;
            height: 30px;
            position: relative;
            display: flex !important;
            align-items: center;
            justify-content: center;
            padding: 5px;
            border: 1px solid #D0D5DD;
            border-radius: 6px;
            cursor: pointer;
            overflow: hidden;
        }
        .font-styles__item input {
            width: 0;
            height: 0;
            opacity: 0;
        }
        .font-styles__item img {
            max-width: 70%;
            positin: relative;
            z-index: 2;
        }
        .font-styles__item span {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            transition: all 0.3s ease-in-out;
        }
        .font-styles__item input:checked + span {
            background: #dcefff;
        }
        img {
            max-width: 100%;
            height: auto;
        }
        .hidden {
            display: none !important;
        }
        .recovery-cart {
            display:  flex;
            align-items: center;
            justify-content: center;
            margin: 30px auto 0;
            max-width: 300px;
        }
        .reviews-list {
            max-height: 440px;
            overflow-y: scroll;
        }
        .review {
            display: flex !important;
            align-items: center;
            gap: 4px;
            background: #FFFFFF;
            border: 1px solid #E4E7EC;
            border-radius: 12px;
            padding: 16px;
            margin-bottom: 16px !important;
            cursor: pointer;
        }
        .review__inner {
            width: 100%;
        }
        .review .details-item {
            flex-shrink: 0;
            width: 16px;
        }
        .review__heading {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 6px;
            font-size: 14px;
            color: #667085;
            font-weight: 500;
        }
        .review__info {
            display: flex;
            align-items: center;
            gap: 5px;
        }
        .review__title {
             color: #101828;
        }
        .review__product-name {
            max-width: 200px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            margin-right: 10px;
        }
        .review__rating {
            margin-bottom: 15px;
        }
        .review__content {
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: #667085;
        }
        .review use:nth-child(2) {
            transform: translate(20px);
        }
        .review use:nth-child(3) {
            transform: translate(40px);
        }
        .review use:nth-child(4) {
            transform: translate(60px);
        }
        .review use:nth-child(5) {
            transform: translate(80px);
        }
        .rating {
          display: block;
          height: 20px;
          width: 100px;
        }
         .template-reviews {
            background: #fff;
            padding: 20px;
         }
         .template-reviews .review {
            border: none;
            max-width: 450px;
            margin: 0 auto 30px;
         }
         
         .filters {
            display: flex;
            gap: 15px;
            justify-content: space-between;
            margin-bottom: 20px;
         }
         .filters > * {
            width: calc(50% - 15px);
         }
         .filters .selectMultiple ul {
            width: 200px;
            left: -10px;
         }
         .filters .search-filter input {
            border-radius: 6px;
            height: 40px;
            padding: 0 10px 0 40px;
         }
         .filters .search-filter {
            position: relative;
         }
         .filters .search-filter svg {
            position: absolute;
            left: 10px;
            top: 10px;
         }
`;
    };

const CouponStyles = () =>
    function (values) {
        return `
            .coupon-wrapper {
                text-align: center;
                padding: 15px;
            }
            
            .coupon-title {
                font-size: 24px;
                font-weight: 600;
            }
            
            .coupon-description {
                line-height: 16px;
                font-size: 14px;
                margin-bottom: 20px;
            }
            
            .coupon-value {
                font-family: 'Rubik', sans-serif;
                font-size: 22px;
                font-weight: 600;
                color: #0B68FF;
                margin-bottom: 20px;
            }
            
            .button {
              font-weight: 400;
              color: #ffffff;
              text-align: center;
              vertical-align: middle;
              background-color: #000;
              border: 1px solid #0c54c9;
              border-radius: 8px;
              padding: .75rem;
              font-size: 1rem;
              line-height: 1.5;
              transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
              cursor: pointer;
            }
            
            .no-underline {
              text-decoration: none !important;
            }
            .font-styles__row {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        .font-styles__item {
            width: 30px;
            height: 30px;
            position: relative;
            display: flex !important;
            align-items: center;
            justify-content: center;
            padding: 5px;
            border: 1px solid #D0D5DD;
            border-radius: 6px;
            cursor: pointer;
            overflow: hidden;
        }
        .font-styles__item input {
            width: 0;
            height: 0;
            opacity: 0;
        }
        .font-styles__item img {
            max-width: 70%;
            positin: relative;
            z-index: 2;
        }
        .font-styles__item span {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            transition: all 0.3s ease-in-out;
        }
        .font-styles__item input:checked + span {
            background: #dcefff;
        }
        .product-details-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        
        .details-item {
          width: 50%;
        }
        
        .details-item label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
          font-size: 14px;
          color: #344054;
        }
        .coupon-item {
            max-width: 320px;
            margin: 0 auto 20px;
            display: flex;
            justify-content: space-between;
            align-item: center;
            font-size: 16px;
            flex-wrap: wrap;
        }
        .coupon-item.link {
            justify-content: center;
        }
        .coupon-item__value {
            font-weight: 700;
        }
        img {
            max-width: 100%;
            height: auto;
        }
        `
    }

const productSelect = (value, data) => {
    return `
<div class="blockbuilder-widget-label">
    <p class="blockbuilder-label-primary">Product Data</p>
</div>
<select multiple data-placeholder="Select products">
    ${data?.options.map(option => 
        `
            <option ${value.products.includes(option.value.toString()) ? 'selected': ''} class="prodOption" value="${option.value}">
                ${option.label}
            </option>
        `
    )}
</select>
`
}

const renderDetails = (detailsLabelsMap, options, values) => `
<div class="product-details">
    <div class="blockbuilder-widget-label">
        <p class="blockbuilder-label-primary">Details</p>
    </div>
    <div class="product-details-inner">
        ${
            options.map(option => (`
            <div class="details-item">
            <label>
                <input ${values.details[option] ? 'checked' : ''} name="${option}" type="checkbox">
                <span>${detailsLabelsMap[option]}</span>
            </label>
            </div>`)).join('')
        }
    </div>
</div>
`

const renderTitleFontStyle = (options, value) => `
<div class="title-font-style">
    <div class="blockbuilder-widget-label">
        <p class="blockbuilder-label-primary">${value.label}</p>
    </div>
    <div class="font-styles">
        <div class="font-styles__box">
            <div class="font-styles__row">
                ${
                        options.map(option =>`
                        <label class="font-styles__item">
                            <img src="https://mkravtsov03.github.io/${option}.svg" alt="">
                            <input type="checkbox" value="${option}" ${value.styles[option].active ? 'checked' : ''} name="${option}">
                            <span></span>
                        </label>
                    `).join('')
                }
            </div>
        </div>
    </div>
</div>
`

const renderDescrFontStyle = (options, values) => `
<div class="descr-font-style">
    <div class="blockbuilder-widget-label">
        <p class="blockbuilder-label-primary">Font style</p>
    </div>
    <div class="font-styles">
        <div class="font-styles__box">
            <div class="font-styles__row">
                ${
                        options.map(option =>`
                        <label class="font-styles__item">
                            <img src="https://mkravtsov03.github.io/${option}.svg" alt="">
                            <input type="checkbox" value="${option}" ${values[option].active ? 'checked' : ''} name="${option}">
                            <span></span>
                        </label>
                    `).join('')
                }
            </div>
        </div>
    </div>
</div>
`

const layoutsList = (layouts) => {
    return `
    <div class="blockbuilder-widget-label">
        <p class="blockbuilder-label-primary">Layout</p>
    </div>
    <div class="layout-list">
        ${
        layouts.map(layout => `
                 <label class="${layout.disabled ? 'disabled' : '' } ${layout.value}">
                    <img src="https://mkravtsov03.github.io/${layout.value}.svg" alt="">
                    <input type="radio" value="${layout.value}" ${layout.active ? 'checked' : ''} name="layout">
                    <span></span>
                </label>
            `).join('')
    }
    </div>
`
}


const getCouponTemplate = () => function (values) {
    const { data: { coupons }, coupon } = values;
    console.log({couponsValues: values})
    const activeCoupon = coupons.find(currentCoupon => currentCoupon.id == coupon)
    const renderCoupon = () => `
    <div style="font-family: ${values.titleFont.value}; font-size: ${values.titleFontSize}px; text-align: ${values.titleAligment}; color: ${values.titleColor}; font-weight: ${values.titleFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.titleFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.titleFontStyle.styles.underline.active ? 'underline' : 'none'}" class="coupon-value"> 
                ${(activeCoupon?.title || 'Pick your Coupon')}
    </div>
    `;
    const renderValidFrom = () => `
    <div style="" class="coupon-item">
        <div class="coupon-item__title"> 
            Valid from:
        </div>
        <div style="font-family: ${values.validFromFont.value}; font-size: ${values.validFromFontSize}px; color: ${values.validFromColor};" class="coupon-item__value"> 
            ${(activeCoupon?.starts_at ? new Date(activeCoupon?.starts_at).toDateString() : '')}
        </div>
    </div>
    `;
    const renderExpireDate = () => `
    <div style="font-family: ${values.expireDateFont.value}; font-size: ${values.expireDateFontSize}px; color: ${values.expireDateColor};" class="coupon-item">
        <div class="coupon-item__title"> 
            Expiry Date:
        </div>
        <div style="" class="coupon-item__value"> 
            ${(activeCoupon?.ends_at ? new Date(activeCoupon?.ends_at).toDateString() : '')}
        </div>
    </div>
    `;
    const renderCouponValue = () => `
    <div style="font-family: ${values.discountValueFont.value}; font-size: ${values.discountValueFontSize}px; color: ${values.discountValueColor};" class="coupon-item">
        <div class="coupon-item__title"> 
            Discount value:
        </div>
        <div style="" class="coupon-item__value"> 
            ${(activeCoupon?.value ? activeCoupon?.value : '')}
        </div>
    </div>
    `;
    const renderCouponType = () => `
    <div style="" class="coupon-item">
        <div class="coupon-item__title"> 
            Discount type:
        </div>
        <div style="" class="coupon-item__value"> 
            ${(activeCoupon?.value_type ? activeCoupon?.value_type : '')}
        </div>
    </div>
    `;
    const renderLink = () => `
    <div style="text-align: ${values.btnAligment}; display: block;" class="coupon-item link">
        <a style=" display: inline-block; border-left: ${values.btnBorder.borderLeftWidth} ${values.btnBorder.borderLeftStyle} ${values.btnBorder.borderLeftColor}; border-top: ${values.btnBorder.borderTopWidth} ${values.btnBorder.borderTopStyle} ${values.btnBorder.borderTopColor}; border-right: ${values.btnBorder.borderRightWidth} ${values.btnBorder.borderRightStyle} ${values.btnBorder.borderRightColor}; border-bottom: ${values.btnBorder.borderBottomWidth} ${values.btnBorder.borderBottomStyle} ${values.btnBorder.borderBottomColor}; color: ${values.btnColor}; font-size: ${values.btnFontSize}px; background-color: ${values.btnBg};" class="button no-underline" href="${(values.btnLink.url ? values.btnLink.url  : activeCoupon?.shareable_link)}" target="_blank">${values.couponBtn}</a>
    </div>
    `;
    return (
    `
        <div class="coupon-wrapper">
            ${values.details.details.coupon ? renderCoupon() : ''}
            ${values.details.details.startsAt ? renderValidFrom() : ''}
            ${values.details.details.expireDate ? renderExpireDate() : ''}
            ${values.details.details.couponValue ? renderCouponValue() : ''}
            ${values.details.details.couponType ? renderCouponType() : ''}
            ${values.details.details.link ? renderLink() : ''}
        </div>
    `
    )
};

const getEventsTemplate = () => function (values) {
    console.log(values)
    const acctiveLayout = values.layout.find(layout => layout.active)
    const productCardRenderer = () => `
            <span style="display: none;">**</span>
                <table style="position: relative;
                            min-width: 0;
                            word-wrap: break-word;
                            background-color: #fff;
                            background-clip: border-box;
                            text-align: center;
                            border-bottom: 1px solid #E4E7EC;
                            margin-bottom: 24px;
                            border-radius: 12px 12px 0px 0px;
                            width: 100%;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img alt="" style="max-width: 100%; margin-bottom: 15px; height: auto; display: ${values?.details?.details.image ? 'inline-block' : 'none'}" src="{{ line_item_logo }}" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table style="padding:15px 10px;display:flex;width: 100%;">
                                            <tbody style="width: 100%">
                                                <tr style="width: 100%">
                                                    <td id="product-inner-td" style="width: 85%;">
                                                        <div style="font-family: ${values.titleFont.value}; font-size: ${values.titleFontSize}px; text-align: ${values.titleAligment}; color: ${values.titleColor}; font-weight: ${values.titleFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.titleFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.titleFontStyle.styles.underline.active ? 'underline' : 'none'}; margin-bottom: 15px; display: ${values?.details?.details.name ? 'block' : 'none'};">
                                                            {{ line_item_title }}
                                                        </div>
                                                        <div style="font-family: ${values.priceFont.value}; font-size: ${values.priceFontSize}px; text-align: ${values.priceAligment}; color: ${values.priceColor}; font-weight: ${values.priceFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.priceFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.priceFontStyle.styles.underline.active ? 'underline' : 'none'}; word-break: break-all; margin-bottom: 15px; display: ${values?.details?.details.price ? 'block' : 'none'};">
                                                            {{ line_item_price }}
                                                        </div>
                                                        <div style="font-family: ${values.quantityFont.value}; font-size: ${values.quantityFontSize}px; text-align: ${values.quantityAligment}; color: ${values.quantityColor}; font-weight: ${values.quantityFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.quantityFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.quantityFontStyle.styles.underline.active ? 'underline' : 'none'}; word-break: break-all; margin-bottom: 0; display: ${values?.details?.details.quantity ? 'block' : 'none'}" class="quantity price"> 
                                                            Quantity: {{ line_item_quantity }}
                                                        </div>
                                                    </td>
                                                    <td style="width: 100%; padding: 0 10px;"></td>
                                                    <td>
                                                        <a style="font-weight: 400;
                                                                  text-align: center;
                                                                  vertical-align: middle;
                                                                  border-radius: 8px;
                                                                  padding: 0.75rem;
                                                                  font-size: 1rem;
                                                                  line-height: 1.5;
                                                                  transition: color .15s ease-in-out,background-color .15s ease-in-out, border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                                                                  cursor: pointer;
                                                                  text-decoration: none;
                                                                  min-width: 105px;
                                                                  max-width: 100%;
                                                                  border-left: ${values.btnBorder.borderLeftWidth} ${values.btnBorder.borderLeftStyle} ${values.btnBorder.borderLeftColor}; 
                                                                  border-top: ${values.btnBorder.borderTopWidth} ${values.btnBorder.borderTopStyle} ${values.btnBorder.borderTopColor}; 
                                                                  border-right: ${values.btnBorder.borderRightWidth} ${values.btnBorder.borderRightStyle} ${values.btnBorder.borderRightColor}; 
                                                                  border-bottom: ${values.btnBorder.borderBottomWidth} ${values.btnBorder.borderBottomStyle} ${values.btnBorder.borderBottomColor}; 
                                                                  color: ${values.btnColor};
                                                                  font-size: ${values.btnFontSize}px; 
                                                                  background-color: ${values.btnBg};
                                                                  display: ${values?.details?.details.button ? 'block' : 'none'};"
                                                                  href="{{ line_item_links }}" target="_blank">
                                                            ${values.btn}
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                </table>
            <span style="display: none;">**</span>
        `;
    const productTwoColumnsCardRenderer = () => `
           <span style="display: none;">**</span>
                <div style="border-bottom:1px solid #e4e7ec; padding: 20px 10px;">
                    <table style="width:100%;">
                    <tbody>
                      <tr>
                        <td style="vertical-align: text-top; padding-right: 10px">
                            <div style="max-width:130px;border-radius:7px;overflow:hidden; display: inline-block">
                                <img alt="" style="display: ${values?.details?.details.image ? 'block' : 'none'}; max-width: 100%; height: auto;" src="{{ line_item_logo }}" />
                            </div>
                        </td>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td> 
                                            <table>
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                        <div style="font-family: ${values.titleFont.value}; font-size: ${values.titleFontSize}px; text-align: ${values.titleAligment}; color: ${values.titleColor}; font-weight: ${values.titleFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.titleFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.titleFontStyle.styles.underline.active ? 'underline' : 'none'}; margin-bottom: 15px; display: ${values?.details?.details.name ? 'block' : 'none'};">
                                                            {{ line_item_title }}
                                                        </div>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <div style="font-family: ${values.quantityFont.value}; font-size: ${values.quantityFontSize}px; text-align: ${values.quantityAligment}; color: ${values.quantityColor}; font-weight: ${values.quantityFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.quantityFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.quantityFontStyle.styles.underline.active ? 'underline' : 'none'}; word-break: break-all; margin-bottom: 0; display: ${values?.details?.details.quantity ? 'block' : 'none'}; margin-bottom: 40px" class="quantity price"> 
                                                            Quantity: {{ line_item_quantity }}
                                                        </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td style="vertical-align: text-top;">
                                          <div style="font-family: ${values.priceFont.value}; font-size: ${values.priceFontSize}px; text-align: ${values.priceAligment}; color: ${values.priceColor}; font-weight: ${values.priceFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.priceFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.priceFontStyle.styles.underline.active ? 'underline' : 'none'}; padding-left: 20px; padding-top: 7px; margin-bottom: 15px; display: ${values?.details?.details.price ? 'inline-block' : 'none'}; word-break: initial;">
                                                {{ line_item_price }}
                                          </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div style="width: 100%">
                                <div style="text-align: right">
                                    <a style="font-weight: 400;
                                      text-align: center;
                                      vertical-align: middle;
                                      border-radius: 8px;
                                      padding: 0.75rem;
                                      font-size: 1rem;
                                      line-height: 1.5;
                                      transition: color .15s ease-in-out,background-color .15s ease-in-out, border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                                      cursor: pointer;
                                      text-decoration: none;
                                      min-width: 105px;
                                      max-width: 100%;
                                      border-left: ${values.btnBorder.borderLeftWidth} ${values.btnBorder.borderLeftStyle} ${values.btnBorder.borderLeftColor}; 
                                      border-top: ${values.btnBorder.borderTopWidth} ${values.btnBorder.borderTopStyle} ${values.btnBorder.borderTopColor}; 
                                      border-right: ${values.btnBorder.borderRightWidth} ${values.btnBorder.borderRightStyle} ${values.btnBorder.borderRightColor}; 
                                      border-bottom: ${values.btnBorder.borderBottomWidth} ${values.btnBorder.borderBottomStyle} ${values.btnBorder.borderBottomColor}; 
                                      color: ${values.btnColor};
                                      font-size: ${values.btnFontSize}px; 
                                      background-color: ${values.btnBg};
                                      display: ${values?.details?.details.button ? 'inline-block' : 'none'};"
                                      href="{{ line_item_links }}" target="_blank">
                                        ${values.btn}
                                    </a>
                                </div>
                            </div>
                        </td>
                      </tr>
                    </tbody>
                </table>
                </div>
            <span style="display: none;">**</span>
        `;
    return `
        <div style="background: #FFFFFF;
                    border-radius: 12px;
                    overflow: hidden;
                    padding-bottom: 24px;">
            <div>
                ${acctiveLayout.value === 'two-columns' ? productTwoColumnsCardRenderer() : productCardRenderer()}
            </div>
            <a style="font-weight: 400;
                       text-align: center;
                       vertical-align: middle;
                       border-radius: 8px;
                       padding: 16px;
                       line-height: 1.5;
                       transition: color .15s ease-in-out,background-color .15s ease-in-out, border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                       cursor: pointer;
                       margin: 30px auto 0;
                       max-width: 170px;
                       text-decoration: none;
                       border-left: ${values.recoveryBorder.borderLeftWidth} ${values.recoveryBorder.borderLeftStyle} ${values.recoveryBorder.borderLeftColor};
                       border-top: ${values.recoveryBorder.borderTopWidth} ${values.recoveryBorder.borderTopStyle} ${values.recoveryBorder.borderTopColor};
                       border-right: ${values.recoveryBorder.borderRightWidth} ${values.recoveryBorder.borderRightStyle} ${values.recoveryBorder.borderRightColor}; 
                       border-bottom: ${values.recoveryBorder.borderBottomWidth} ${values.recoveryBorder.borderBottomStyle} ${values.recoveryBorder.borderBottomColor};
                       color: ${values.recoveryColor};
                       font-size: ${values.recoveryFontSize}px;
                       background-color: ${values.recoveryBg};
                       display: ${values?.details?.details.recovery ? 'block' : 'none'};"
                       href="{{ abandoned_checkout_url }}" target="_blank">
                ${values.recovery}
            </a>
        </div>
    `
}

const getEventsTemplateViewer = () => function (values) {
    console.log(values)
    const acctiveLayout = values.layout.find(layout => layout.active)
    const productCardRenderer = () => `
           <span style="display: none;">**</span>
                <table style="position: relative;
                            min-width: 0;
                            word-wrap: break-word;
                            background-color: #fff;
                            background-clip: border-box;
                            text-align: center;
                            border-bottom: 1px solid #E4E7EC;
                            margin-bottom: 24px;
                            border-radius: 12px 12px 0px 0px;
                            width: 100%;">
                    <tbody>
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img alt="" style="max-width: 100%; margin-bottom: 15px; height: auto; display: ${values?.details?.details.image ? 'inline-block' : 'none'}" src="https://storage.cloud.google.com/moda-platform-dev-us-central1-ui-connectors-icons/connector_icons/image/live/image_placeholder.svg?authuser=2" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table style="padding:15px 10px;display:flex;width: 100%;">
                                    <tbody style="width: 100%">
                                        <tr style="width: 100%">
                                            <td id="product-inner-td" style="width: 85%;">
                                                <div style="font-family: ${values.titleFont.value}; font-size: ${values.titleFontSize}px; text-align: ${values.titleAligment}; color: ${values.titleColor}; font-weight: ${values.titleFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.titleFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.titleFontStyle.styles.underline.active ? 'underline' : 'none'}; margin-bottom: 15px; display: ${values?.details?.details.name ? 'block' : 'none'};">
                                                    {{ line_item_title }}
                                                </div>
                                                <div style="font-family: ${values.priceFont.value}; font-size: ${values.priceFontSize}px; text-align: ${values.priceAligment}; color: ${values.priceColor}; font-weight: ${values.priceFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.priceFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.priceFontStyle.styles.underline.active ? 'underline' : 'none'}; word-break: break-all; margin-bottom: 15px; display: ${values?.details?.details.price ? 'block' : 'none'};">
                                                    {{ line_item_price }}
                                                </div>
                                                <div style="font-family: ${values.quantityFont.value}; font-size: ${values.quantityFontSize}px; text-align: ${values.quantityAligment}; color: ${values.quantityColor}; font-weight: ${values.quantityFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.quantityFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.quantityFontStyle.styles.underline.active ? 'underline' : 'none'}; word-break: break-all; margin-bottom: 0; display: ${values?.details?.details.quantity ? 'block' : 'none'}" class="quantity price"> 
                                                    Quantity: {{ line_item_quantity }}
                                                </div>
                                            </td>
                                            <td style="width: 100%; padding: 0 10px;"></td>
                                            <td>
                                                <a style="font-weight: 400;
                                                          text-align: center;
                                                          vertical-align: middle;
                                                          border-radius: 8px;
                                                          padding: 0.75rem;
                                                          font-size: 1rem;
                                                          line-height: 1.5;
                                                          transition: color .15s ease-in-out,background-color .15s ease-in-out, border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                                                          cursor: pointer;
                                                          text-decoration: none;
                                                          min-width: 105px;
                                                          max-width: 100%;
                                                          border-left: ${values.btnBorder.borderLeftWidth} ${values.btnBorder.borderLeftStyle} ${values.btnBorder.borderLeftColor}; 
                                                          border-top: ${values.btnBorder.borderTopWidth} ${values.btnBorder.borderTopStyle} ${values.btnBorder.borderTopColor}; 
                                                          border-right: ${values.btnBorder.borderRightWidth} ${values.btnBorder.borderRightStyle} ${values.btnBorder.borderRightColor}; 
                                                          border-bottom: ${values.btnBorder.borderBottomWidth} ${values.btnBorder.borderBottomStyle} ${values.btnBorder.borderBottomColor}; 
                                                          color: ${values.btnColor};
                                                          font-size: ${values.btnFontSize}px; 
                                                          background-color: ${values.btnBg};
                                                          display: ${values?.details?.details.button ? 'block' : 'none'};"
                                                          href="{{ line_item_links }}" target="_blank">
                                                    ${values.btn}
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            <span style="display: none;">**</span>
        `;
    const productTwoColumnsCardRenderer = () => `
           <span style="display: none;">**</span>
                <div style="border-bottom:1px solid #e4e7ec; padding: 20px 10px;">
                    <table style="width:100%;">
                    <tbody>
                      <tr>
                        <td style="vertical-align: text-top; padding-right: 10px;">
                            <div style="max-width:130px;border-radius:7px;overflow:hidden; display: inline-block">
                                <img alt="" style="display: ${values?.details?.details.image ? 'block' : 'none'}" src="https://storage.cloud.google.com/moda-platform-dev-us-central1-ui-connectors-icons/connector_icons/image/live/image_placeholder.svg?authuser=2" />
                            </div>
                        </td>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td> 
                                            <table>
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                        <div style="font-family: ${values.titleFont.value}; font-size: ${values.titleFontSize}px; text-align: ${values.titleAligment}; color: ${values.titleColor}; font-weight: ${values.titleFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.titleFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.titleFontStyle.styles.underline.active ? 'underline' : 'none'}; margin-bottom: 15px; display: ${values?.details?.details.name ? 'block' : 'none'};">
                                                            {{ line_item_title }}
                                                        </div>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <div style="font-family: ${values.quantityFont.value}; font-size: ${values.quantityFontSize}px; text-align: ${values.quantityAligment}; color: ${values.quantityColor}; font-weight: ${values.quantityFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.quantityFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.quantityFontStyle.styles.underline.active ? 'underline' : 'none'}; word-break: break-all; margin-bottom: 0; display: ${values?.details?.details.quantity ? 'block' : 'none'}; margin-bottom: 40px" class="quantity price"> 
                                                            Quantity: {{ line_item_quantity }}
                                                        </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td style="vertical-align: text-top;">
                                          <div style="font-family: ${values.priceFont.value}; font-size: ${values.priceFontSize}px; text-align: ${values.priceAligment}; color: ${values.priceColor}; font-weight: ${values.priceFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.priceFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.priceFontStyle.styles.underline.active ? 'underline' : 'none'}; padding-left: 20px; padding-top: 7px; margin-bottom: 15px; display: ${values?.details?.details.price ? 'inline-block' : 'none'};">
                                                {{ line_item_price }}
                                          </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div style="width: 100%">
                                <div style="text-align: right">
                                    <a style="font-weight: 400;
                                      text-align: center;
                                      vertical-align: middle;
                                      border-radius: 8px;
                                      padding: 0.75rem;
                                      font-size: 1rem;
                                      line-height: 1.5;
                                      transition: color .15s ease-in-out,background-color .15s ease-in-out, border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                                      cursor: pointer;
                                      text-decoration: none;
                                      min-width: 105px;
                                      max-width: 100%;
                                      border-left: ${values.btnBorder.borderLeftWidth} ${values.btnBorder.borderLeftStyle} ${values.btnBorder.borderLeftColor}; 
                                      border-top: ${values.btnBorder.borderTopWidth} ${values.btnBorder.borderTopStyle} ${values.btnBorder.borderTopColor}; 
                                      border-right: ${values.btnBorder.borderRightWidth} ${values.btnBorder.borderRightStyle} ${values.btnBorder.borderRightColor}; 
                                      border-bottom: ${values.btnBorder.borderBottomWidth} ${values.btnBorder.borderBottomStyle} ${values.btnBorder.borderBottomColor}; 
                                      color: ${values.btnColor};
                                      font-size: ${values.btnFontSize}px; 
                                      background-color: ${values.btnBg};
                                      display: ${values?.details?.details.button ? 'inline-block' : 'none'};"
                                      href="{{ line_item_links }}" target="_blank">
                                        ${values.btn}
                                    </a>
                                </div>
                            </div>
                        </td>
                      </tr>
                    </tbody>
                </table>
                </div>
            <span style="display: none;">**</span>
        `;
    return `
        <div style="background: #FFFFFF;
                    border-radius: 12px;
                    overflow: hidden;
                    padding-bottom: 24px;">
            <div>
                 ${acctiveLayout.value === 'two-columns' ? productTwoColumnsCardRenderer() : productCardRenderer()}
            </div>
             <a style="font-weight: 400;
                       text-align: center;
                       vertical-align: middle;
                       border-radius: 8px;
                       padding: 16px;
                       line-height: 1.5;
                       transition: color .15s ease-in-out,background-color .15s ease-in-out, border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                       cursor: pointer;
                       margin: 30px auto 0;
                       max-width: 170px;
                       text-decoration: none;
                       border-left: ${values.recoveryBorder.borderLeftWidth} ${values.recoveryBorder.borderLeftStyle} ${values.recoveryBorder.borderLeftColor};
                       border-top: ${values.recoveryBorder.borderTopWidth} ${values.recoveryBorder.borderTopStyle} ${values.recoveryBorder.borderTopColor};
                       border-right: ${values.recoveryBorder.borderRightWidth} ${values.recoveryBorder.borderRightStyle} ${values.recoveryBorder.borderRightColor}; 
                       border-bottom: ${values.recoveryBorder.borderBottomWidth} ${values.recoveryBorder.borderBottomStyle} ${values.recoveryBorder.borderBottomColor};
                       color: ${values.recoveryColor};
                       font-size: ${values.recoveryFontSize}px;
                       background-color: ${values.recoveryBg};
                       display: ${values?.details?.details.recovery ? 'block' : 'none'};"
                       href="{{ abandoned_checkout_url }}" target="_blank">
                ${values.recovery}
            </a>
        </div>
    `
}

const getProductTemplate = () => function (values) {
        const products = values?.productContent?.products.length
            ?
            values?.productContent?.products
            :
            [values?.data?.products[0]?.id];
        const { layout } = values?.productContent
        console.log(values)
        const productTitleRenderer = (product) => `
            <div id="product-price" style="font-family: ${values.titleFont.value}; font-size: ${values.titleFontSize}px; text-align: ${values.titleAligment}; color: ${values.titleColor}; font-weight: ${values.titleFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.titleFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.titleFontStyle.styles.underline.active ? 'underline' : 'none'}; margin-bottom: 15px; min-height: ${layout === 'three-columns' ? '59px' : '39px'}; line-height: 1.2">
                ${product?.productTitle?.substring(0, 28) || 'Product Title'} ${product?.productTitle.length > 31 ? '...' : ''}
            </div> 
        `;

        const productPriceRenderer = (product) => `
           <span style="margin: 0 10px" class="price">${product?.price && (product?.price)} $</span>
        `;

        const productComparisonPriceRenderer = (product) => product?.comparisonPrice ? `
            <span style="font-size: ${values.comparisonPriceFontSize}px;  color: ${values.comparisonPriceColor};" class="price-old">${product?.comparisonPrice} $</span>
        ` : '';

        const productDescriptionRenderer = (product) => `
            <div style="font-family: ${values.descriptionFont.value}; font-size: ${values.descriptionFontSize}px; text-align: ${values.descriptionAligment}; color: ${values.descriptionColor}; font-weight: ${values.descriptionFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.descriptionFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.descriptionFontStyle.styles.underline.active ? 'underline' : 'none'}; line-height: 175%;">
                ${product?.description || ''}
            </div>
        `;

        const productTypeRenderer = (product) => `
            <div style="margin-bottom: 15px;">${product?.productType}</div>
        `;

        const productButtonRenderer = (product, values) => `
            <a style="font-weight: 400;
                       text-align: center;
                       vertical-align: middle;
                       background-color: #000;
                       border-radius: 8px;
                       padding: 0.75rem;
                       font-size: 1rem;
                       line-height: 1.5;
                       transition: color .15s ease-in-out,background-color .15s ease-in-out, border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                       cursor: pointer;
                       margin: 30px auto 0;
                       max-width: 300px;
                       cursor: pointer;
                       text-decoration: none;border-left: ${values.btnBorder.borderLeftWidth} ${values.btnBorder.borderLeftStyle} ${values.btnBorder.borderLeftColor}; border-top: ${values.btnBorder.borderTopWidth} ${values.btnBorder.borderTopStyle} ${values.btnBorder.borderTopColor}; border-right: ${values.btnBorder.borderRightWidth} ${values.btnBorder.borderRightStyle} ${values.btnBorder.borderRightColor}; border-bottom: ${values.btnBorder.borderBottomWidth} ${values.btnBorder.borderBottomStyle} ${values.btnBorder.borderBottomColor}; color: ${values.btnColor}; font-size: ${values.btnFontSize}px; background-color: ${values.btnBg};" href="${values.btnLink.url}" target="${values.btnLink.target}">
                    ${values.productCTA}
            </a>
        `;

        const productImageRenderer = (product) => `
                <div style="overflow: hidden">
                    <img style="max-width: 100%;
                            width: 100%;
                            object-fit: contain;
                            border-top-left-radius: 0.25rem;
                            border-top-right-radius: 0.25rem;" 
                            alt="" src="${product?.productImage?.src || 'https://b-tm.com.ua/assets/galleries/105/noimage.png'}" />
                </div>
        `;

        const twoColumnsProductRenderer = (currentProduct, productId) => `
            <div data-at="${productId}" style="
                                    position: relative;
                                    min-width: 0;
                                    max-width: calc(50% - 12px);
                                    margin: 0 5px 10px;
                                    width: 100%;
                                    word-wrap: break-word;
                                    background-color: #fff;
                                    background-clip: border-box;
                                    border: 1px solid rgba(0,0,0,.125);
                                    border-radius: 0.25rem;
                                    text-align: center;
                                    float: left;">
                            
                            ${values?.details?.details.image ? `
                                <div style="height: 220px; display: flex; padding: 10px 0; overflow: hidden">
                                    <img style="max-width: 100%;
                                    width: 100%;
                                    object-fit: contain;
                                    border-top-left-radius: 0.25rem;
                                    border-top-right-radius: 0.25rem;"
                                         alt="" src="${currentProduct?.productImage?.src || 'https://b-tm.com.ua/assets/galleries/105/noimage.png'}" />
                                </div>`
            : ''}
                           
                            <div style="padding: 0 10px;">
                                ${values?.details?.details.title ? productTitleRenderer(currentProduct) : ''}
                                ${values?.details?.details.productType ? productTypeRenderer(currentProduct) : ''}
                                <div style="font-size: ${values.priceFontSize}px; font-family: ${values.priceFont.value}; color: ${values.priceColor}; font-weight: 500; margin-bottom: 15px;">
                                    ${values?.details?.details.price ? productPriceRenderer(currentProduct) : ''}
                                    ${values?.details?.details.comparisonPrice ? productComparisonPriceRenderer(currentProduct) : ''}
                                </div>
                                ${values?.details?.details.description ? productDescriptionRenderer(currentProduct) : ''}
                                <div style="padding: 20px 10px">
                                     ${values?.details?.details.button ? productButtonRenderer(currentProduct, values) : ''}
                                </div> 
                            </div>
                        </div>
        `;

        const twoColumnsProductReverseRenderer = (currentProduct, productId) => `
            <div data-at="${productId}" style="
                                    position: relative;
                                    min-width: 0;
                                    max-width: calc(50% - 12px);
                                    margin: 0 5px 10px;
                                    width: 100%;
                                    word-wrap: break-word;
                                    background-color: #fff;
                                    background-clip: border-box;
                                    border: 1px solid rgba(0,0,0,.125);
                                    border-radius: 0.25rem;
                                    text-align: center;
                                    float: left;">
                                    
                                    <div style="padding: 10px 10px 0;">
                                        ${values?.details?.details.title ? productTitleRenderer(currentProduct) : ''}
                                        ${values?.details?.details.productType ? productTypeRenderer(currentProduct) : ''}
                                        <div style="font-size: ${values.priceFontSize}px; font-family: ${values.priceFont.value}; color: ${values.priceColor}; font-weight: 500; margin-bottom: 15px;">
                                            ${values?.details?.details.price ? productPriceRenderer(currentProduct) : ''}
                                            ${values?.details?.details.comparisonPrice ? productComparisonPriceRenderer(currentProduct) : ''}
                                        </div>
                                        ${values?.details?.details.description ? productDescriptionRenderer(currentProduct) : ''}
                                        <div style="padding: 20px 10px">
                                             ${values?.details?.details.button ? productButtonRenderer(currentProduct, values) : ''}
                                        </div> 
                                    </div>
                            
                                    ${values?.details?.details.image ? `
                                        <div style="height: 220px; display: flex; padding: 10px 0; overflow: hidden">
                                            <img style="max-width: 100%;
                                            width: 100%;
                                            object-fit: contain;
                                            border-top-left-radius: 0.25rem;
                                            border-top-right-radius: 0.25rem;"
                                                 alt="" src="${currentProduct?.productImage?.src || 'https://b-tm.com.ua/assets/galleries/105/noimage.png'}" />
                                        </div>`
                                     : ''}
                        </div>
        `;

        const renderProducts = () => {
            switch (layout) {
                case('two-columns'):
                    return `
                        <div style="overflow: hidden">
            ${products.map(productId => {
                        const currentProduct = values.data.products.find((product) => product.id === +productId);
                        return twoColumnsProductRenderer(currentProduct, productId);
                    }).join('')
                    }
        </div>
                    `
                case('two-columns--reverse'):
                    return `
                        <div style="overflow: hidden;">
            ${products.map((productId, index) => {
                        const currentProduct = values.data.products.find((product) => product.id === +productId);
                        return index % 2 == 0 ? twoColumnsProductRenderer(currentProduct, productId) : twoColumnsProductReverseRenderer(currentProduct, productId)
                    }).join('')
                    }
        </div>
                    `
                case('three-columns'):
                    return `
                        <div style="overflow: hidden;">
            ${products.map((productId, index) => {
                        const currentProduct = values.data.products.find((product) => product.id === +productId);
                        return `
                        <div data-at="${productId}" style="
                                    position: relative;
                                    min-width: 0;
                                    max-width: calc(33.33333% - 6px);
                                    margin: 0 2px 10px;
                                    width: 100%;
                                    word-wrap: break-word;
                                    background-color: #fff;
                                    background-clip: border-box;
                                    border: 1px solid rgba(0,0,0,.125);
                                    border-radius: 0.25rem;
                                    text-align: center;
                                    float: left;">
                            
                            ${values?.details?.details.image ? `
                                <div style="max-height: 150px; display: flex; padding: 10px 0; overflow: hidden">
                                    <img style="max-width: 100%;
                                    width: 100%;
                                    object-fit: contain;
                                    border-top-left-radius: 0.25rem;
                                    border-top-right-radius: 0.25rem;"
                                         alt="" src="${currentProduct?.productImage?.src || 'https://b-tm.com.ua/assets/galleries/105/noimage.png'}" />
                                </div>`
                            : ''}
                           
                            <div style="padding: 0 10px;">
                                ${values?.details?.details.title ? productTitleRenderer(currentProduct) : ''}
                                ${values?.details?.details.productType ? productTypeRenderer(currentProduct) : ''}
                                <div style="font-size: ${values.priceFontSize}px; font-family: ${values.priceFont.value}; color: ${values.priceColor}; font-weight: 500; margin-bottom: 15px;">
                                    ${values?.details?.details.price ? productPriceRenderer(currentProduct) : ''}
                                    ${values?.details?.details.comparisonPrice ? productComparisonPriceRenderer(currentProduct) : ''}
                                </div>
                                ${values?.details?.details.description ? productDescriptionRenderer(currentProduct) : ''}
                                <div style="padding: 20px 10px">
                                     ${values?.details?.details.button ? productButtonRenderer(currentProduct, values) : ''}
                                </div> 
                            </div>
                        </div>
                        `
                    }).join('')
                    }
        </div>
                    `

                default:
                    return `
                <div>
            ${products.map(productId => {
                        const currentProduct = values.data.products.find((product) => product.id === +productId);
                        return `
                        <div data-at="${productId}" style="position: relative;
                                    min-width: 0;
                                    width: 100%;
                                    margin-bottom: 20px;
                                    word-wrap: break-word;
                                    background-color: #fff;
                                    background-clip: border-box;
                                    border: 1px solid rgba(0,0,0,.125);
                                    border-radius: 0.25rem;
                                    text-align: center;">
                            
                            ${values?.details?.details.image ? productImageRenderer(currentProduct) : ''}
                           
                            <div style="padding: 0 10px;">
                                ${values?.details?.details.title ? productTitleRenderer(currentProduct) : ''}
                                ${values?.details?.details.productType ? productTypeRenderer(currentProduct) : ''}
                                <div style="font-size: ${values.priceFontSize}px; font-family: ${values.priceFont.value}; color: ${values.priceColor}; font-weight: 500; margin-bottom: 15px;">
                                    ${values?.details?.details.price ? productPriceRenderer(currentProduct) : ''}
                                    ${values?.details?.details.comparisonPrice ? productComparisonPriceRenderer(currentProduct) : ''}
                                </div>
                                ${values?.details?.details.description ? productDescriptionRenderer(currentProduct) : ''}
                                <div style="padding: 20px 10px">
                                     ${values?.details?.details.button ? productButtonRenderer(currentProduct, values) : ''}
                                </div> 
                            </div>
                        </div>
                        `
                    }).join('')
                    }
        </div>
                `
            }
        }

        return `
            ${renderProducts()}
        `
    };

const productToolTemplate = getProductTemplate();

const couponToolTemplate = getCouponTemplate();

const eventsTemplate = getEventsTemplate();

const eventsTemplateViewer = getEventsTemplateViewer();

unlayer.registerTool({
    name: 'product_tool',
    label: 'Product',
    icon: 'https://mkravtsov03.github.io/product-icon.svg',
    supportedDisplayModes: ['web', 'email', 'popup'],
    options: {
        productContent: {
            title: 'Product Content',
            position: 1,
            options: {
                productContent: {
                   label: 'Product',
                   defaultValue: {layout: 'one-column', products: []},
                   widget: 'product_content',
                },
                layout: {
                   label: 'layout',
                   defaultValue: [
                                    {active: true, value: 'one-column', disabled: false},
                                    {active: false, value: 'two-columns', disabled: false},
                                    {active: false, value: 'two-columns--reverse', disabled: false},
                                    {active: false, value: 'three-columns', disabled: true},
                                ],
                   widget: 'layout',
                },
                details: {
                   label: 'Details',
                   defaultValue: {title: 'product', details: {title: false, comparisonPrice: false, image: true, price: false, description: false, productType: false, button: true}},
                   widget: 'product_details',
                },
                titleFont: {
                    label: 'Product title font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                titleFontSize: {
                    enabled: true,
                    label: 'Product title font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                titleFontStyle: {
                    enabled: true,
                    label: 'Product title font style',
                    defaultValue: {
                        label: 'Title Font style',
                        styles: {
                            bold: {
                                active: true,
                                value: 'bold'
                            },
                            italic: {
                                active: false,
                                value: 'italic'
                            },
                            underline: {
                                active: false,
                                value: 'underline'
                            }
                        }
                    },
                    widget: 'title_font_styles',
                },
                titleColor: {
                    enabled: true,
                    label: 'Product title color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                titleAligment: {
                    enabled: true,
                    label: 'Product title aligment',
                    defaultValue: 'center',
                    widget: 'alignment',
                },
                descriptionFont: {
                    label: 'Product description font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                descriptionFontSize: {
                    label: 'Product description font size',
                    defaultValue: '14',
                    widget: 'counter',
                },
                descriptionFontStyle: {
                    label: 'Product Description font style',
                    defaultValue: {
                        label: 'Description Font style',
                        styles: {
                            bold: {
                                active: true,
                                value: 'bold'
                            },
                            italic: {
                                active: false,
                                value: 'italic'
                            },
                            underline: {
                                active: false,
                                value: 'underline'
                            }
                        }
                    },
                    widget: 'title_font_styles',
                },
                descriptionColor: {
                    label: 'Product decription color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                descriptionAligment: {
                    label: 'Product description aligment',
                    defaultValue: 'left',
                    widget: 'alignment',
                },
                priceFont: {
                    label: 'Price font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                priceFontSize: {
                    enabled: true,
                    label: 'Price font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                priceColor: {
                    enabled: false,
                    label: 'Price color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                comparisonPriceFontSize: {
                    enabled: false,
                    label: 'Comparison price font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                comparisonPriceColor: {
                    enabled: false,
                    label: 'Comparison price color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                productCTA: {
                    enabled: true,
                  label: 'Button Content',
                  defaultValue: 'Buy it Now',
                  widget: 'text',
                },

                btnLink: {
                    enabled: true,
                  label: 'Button link',
                  defaultValue: {
                      url: '',
                      target: '_blank'
                  },
                  widget: 'link',
                },
                btnFontSize: {
                    enabled: true,
                    label: 'Button font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                btnColor: {
                    enabled: true,
                    label: 'Button color',
                    defaultValue: '#fff',
                    widget: 'color_picker',
                },
                btnBg: {
                    enabled: true,
                    label: 'Button  background color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                btnBorder: {
                  label: 'Button border',
                  defaultValue: '',
                  widget: 'border',
                },

            },
        },
    },
    transformer: (values, source) => {
        const { name, value, data } = source;
        let newValues = values
        if (name === 'layout') {
            newValues = {
                ...values,
                productContent: {...values.productContent, layout: value.find(layout => layout.active === true).value}
            }
        }

        return newValues
    },
    propertyStates: (values) => {
        let newLayouts = [...values.layout];
        let titleProps = {};
        let descriptionProps = {};
        let priceProps = {};
        let comparisonPriceProps = {};
        let btnProps = {};
        if ( values.productContent.products.length > 2) {
            const newLayouts = [...values.layout]
            newLayouts[3].disabled = false
        } else if ( values.productContent.products.length <= 2) {
            const newLayouts = [...values.layout]
            newLayouts[3].disabled = true
        }
        if (!values.details.details.title) {
            titleProps = {
                titleFont: {
                    enabled: false
                },
                titleFontSize: {
                    enabled: false
                },
                titleColor: {
                    enabled: false
                },
                titleAligment: {
                    enabled: false
                },
                titleFontStyle: {
                    enabled: false
                }
            }
        } else {
            titleProps = {
                titleFont: {
                    enabled: true
                },
                titleFontSize: {
                    enabled: true
                },
                titleColor: {
                    enabled: true
                },
                titleAligment: {
                    enabled: true
                },
                titleFontStyle: {
                    enabled: true
                }
            }
        }
            if (!values.details.details.description) {
                descriptionProps = {
                    descriptionFont: {
                        enabled: false
                    },
                    descriptionFontSize: {
                        enabled: false
                    },
                    descriptionColor: {
                        enabled: false
                    },
                    descriptionAligment: {
                        enabled: false
                    },
                    descriptionFontStyle: {
                        enabled: false
                    }
                }
            }
            else {
            descriptionProps = {
                descriptionFont: {
                    enabled: true
                },
                descriptionFontSize: {
                    enabled: true
                },
                descriptionColor: {
                    enabled: true
                },
                descriptionAligment: {
                    enabled: true
                },
                descriptionFontStyle: {
                    enabled: true
                }
            }
        }
            if (!values.details.details.price) {
                priceProps = {
                    priceFont: {
                        enabled: false
                    },
                    priceFontSize: {
                        enabled: false
                    },
                    priceColor: {
                        enabled: false
                    },
                }
            }
            else {
                priceProps = {
                    priceFont: {
                        enabled: true
                    },
                    priceFontSize: {
                        enabled: true
                    },
                    priceColor: {
                        enabled: true
                    },
                }
        }
            if (!values.details.details.comparisonPrice) {
                comparisonPriceProps = {
                    comparisonPriceFontSize: {
                        enabled: false
                    },
                    comparisonPriceColor: {
                        enabled: false
                    },
                }
            }
            else {
                comparisonPriceProps = {
                    comparisonPriceFontSize: {
                        enabled: true
                    },
                    comparisonPriceColor: {
                        enabled: true
                    },
                }
        }
            if (!values.details.details.button) {
                btnProps = {
                    btnColor: {
                        enabled: false
                    },
                    btnBorder: {
                        enabled: false,
                    },
                    productCTA: {
                        enabled: false
                    },
                    btnFontSize: {
                        enabled: false
                    },
                    btnBg: {
                        enabled: false
                    },
                    btnLink: {
                        enabled: false
                    },
                }
            }
            else {
                btnProps = {
                    btnColor: {
                        enabled: true,
                    },
                    btnBorder: {
                        enabled: true,
                    },
                    productCTA: {
                        enabled: true,
                    },
                    btnFontSize: {
                        enabled: true,
                    },
                    btnBg: {
                        enabled: true
                    },
                    btnLink: {
                        enabled: true
                    },
                }
        }
        console.log({titleProps})
        return {
            layout: {
                value: newLayouts
            },
            ...titleProps,
            ...descriptionProps,
            ...priceProps,
            ...comparisonPriceProps,
            ...btnProps
        }
    },
    renderer: {
        Viewer: unlayer.createViewer({
            render(values) {
                return productToolTemplate(values);
            },
        }),
        exporters: {
            web: function (values) {
                return productToolTemplate(values);
            },
            email: function (values) {
                return productToolTemplate(values);
            },
            popup: function (values) {
                return productToolTemplate(values);
            },
        },
        head: {
            css: ProductStyles(),
            js: function (values) {},
        },
    },
});

unlayer.registerTool({
    name: 'coupon_tool',
    label: 'Coupon',
    icon: 'https://mkravtsov03.github.io/coupon-icon.svg',
    supportedDisplayModes: ['web', 'email', 'popup'],
    options: {
        coupon: {
            title: 'Coupon',
            position: 1,
            options: {
                coupon: {
                    label: 'Coupon',
                    defaultValue: '',
                    widget: 'dropdown',
                },
                details: {
                    label: 'Details',
                    defaultValue: {title: 'coupon', details: {coupon: true, startsAt: false, expireDate: false, couponValue: false, couponType: false, link: false,}},
                    widget: 'product_details',
                },
                couponBtn: {
                    label: 'Button Content',
                    defaultValue: 'Buy it Now',
                    widget: 'text',
                },
                btnLink: {
                    enabled: true,
                    label: 'Button link',
                    defaultValue: {
                        url: '',
                        target: '_blank'
                    },
                    widget: 'link',
                },
                btnFontSize: {
                    enabled: true,
                    label: 'Button font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                btnAligment: {
                    enabled: true,
                    label: 'Button aligment',
                    defaultValue: 'center',
                    widget: 'alignment',
                },
                btnColor: {
                    enabled: true,
                    label: 'Button color',
                    defaultValue: '#fff',
                    widget: 'color_picker',
                },
                btnBg: {
                    enabled: true,
                    label: 'Button  background color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                btnBorder: {
                    label: 'Button border',
                    defaultValue: '',
                    widget: 'border',
                },
            },
        },
        couponFontProperties: {
            title: 'Coupon view options',
            position: 2,
            options: {
                titleFont: {
                    label: 'Coupon font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                titleFontSize: {
                    enabled: true,
                    label: 'Coupon font size',
                    defaultValue: '24',
                    widget: 'counter',
                },
                titleFontStyle: {
                    enabled: true,
                    label: 'Coupon font style',
                    defaultValue: {
                        label: 'Coupon Font style',
                        styles: {
                            bold: {
                                active: true,
                                value: 'bold'
                            },
                            italic: {
                                active: false,
                                value: 'italic'
                            },
                            underline: {
                                active: false,
                                value: 'underline'
                            }
                        }
                    },
                    widget: 'title_font_styles',
                },
                titleColor: {
                    enabled: true,
                    label: 'Coupon color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                titleAligment: {
                    enabled: true,
                    label: 'Coupon aligment',
                    defaultValue: 'center',
                    widget: 'alignment',
                },
            }
        },
        validFrom: {
            title: 'Valid from date view options',
            position: 3,
            options: {
                validFromFont: {
                    label: 'Valid from font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                validFromFontSize: {
                    enabled: true,
                    label: 'Valid from font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                validFromColor: {
                    enabled: true,
                    label: 'Valid from color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
            }
        },
        expireDate: {
            title: 'Expire date view options',
            position: 4,
            options: {
                expireDateFont: {
                    label: 'Expire date font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                expireDateFontSize: {
                    enabled: true,
                    label: 'Expire date font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                expireDateColor: {
                    enabled: true,
                    label: 'Expire date color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
            }
        },
        discountValue: {
            title: 'Discount value view options',
            position: 5,
            options: {
                discountValueFont: {
                    label: 'Discount value font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                discountValueFontSize: {
                    enabled: true,
                    label: 'Discount value font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                discountValueColor: {
                    enabled: true,
                    label: 'Discount value color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
            }
        },
        discountType: {
            title: 'Discount type view options',
            position: 6,
            options: {
                discountTypeFont: {
                    label: 'Discount type font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                discountTypeFontSize: {
                    enabled: true,
                    label: 'Discount type font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                discountTypeColor: {
                    enabled: true,
                    label: 'Discount type color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
            }
        },
    },
    propertyStates: (values) => {
        let couponProps = {};
        let expireDateProps = {};
        let btnProps = {};
        if (!values.details.details.coupon) {
            couponProps = {
                couponFont: {
                    enabled: false
                },
                couponFontSize: {
                    enabled: false
                },
                couponColor: {
                    enabled: false
                },
                couponAligment: {
                    enabled: false
                },
                couponFontStyle: {
                    enabled: false
                }
            }
        } else {
            couponProps = {
                titleFont: {
                    enabled: true
                },
                titleFontSize: {
                    enabled: true
                },
                titleColor: {
                    enabled: true
                },
                titleAligment: {
                    enabled: true
                },
                titleFontStyle: {
                    enabled: true
                }
            }
        }
        if (!values.details.details.expireDate) {
            expireDateProps = {
                expireDateFont: {
                    enabled: false
                },
                expireDateFontSize: {
                    enabled: false
                },
                expireDateColor: {
                    enabled: false
                },
            }
        }
        else {
            expireDateProps = {
                expireDateFont: {
                    enabled: true
                },
                expireDateFontSize: {
                    enabled: true
                },
                expireDateColor: {
                    enabled: true
                },
            }
        }
            if (!values.details.details.link) {
            btnProps = {
                couponBtn: {
                    enabled: false
                },
                btnLink: {
                    enabled: false
                },
                btnFontSize: {
                    enabled: false
                },
                btnColor: {
                    enabled: false
                },
                btnBg: {
                    enabled: false
                },
                btnBorder: {
                    enabled: false
                },
                btnAligment: {
                    enabled: false
                },
            }
        }
        else {
                btnProps = {
                    couponBtn: {
                        enabled: true
                    },
                    btnLink: {
                        enabled: true
                    },
                    btnFontSize: {
                        enabled: true
                    },
                    btnColor: {
                        enabled: true
                    },
                    btnBg: {
                        enabled: true
                    },
                    btnBorder: {
                        enabled: true
                    },
                    btnAligment: {
                        enabled: true
                    },
                }
        }
        return {
            ...couponProps,
            ...expireDateProps,
            ...btnProps,
        }
    },
    renderer: {
        Viewer: unlayer.createViewer({
            render(values) {
                return couponToolTemplate(values);
            },
        }),
        exporters: {
            web: function (values) {
                return couponToolTemplate(values);
            },
            email: function (values) {
                return couponToolTemplate(values);
            },
            popup: function (values) {
                return couponToolTemplate(values);
            },
        },
        head: {
            css: CouponStyles(),
            js: function (values) {},
        },
    },
});

unlayer.registerTool({
    name: 'events_tool',
    label: 'Abandonment',
    icon: 'https://mkravtsov03.github.io/shopping-cart.svg',
    supportedDisplayModes: ['web', 'email', 'popup'],
    options: {
        abandoned_cart: {
            title: 'Abandoned Checkout”',
            position: 1,
            options: {
                layout: {
                    label: 'Layout',
                    defaultValue: [
                        {active: true, value: 'one-column', disabled: false},
                        {active: false, value: 'two-columns', disabled: false},
                    ],
                    widget: 'layout',
                },
                details: {
                    label: 'Details',
                    defaultValue: {title: 'cart', details: {name: true, price: true, quantity: false, button: false, recovery: false, image: true}},
                    widget: 'product_details',
                },
                titleFont: {
                    label: 'Product title font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                titleFontSize: {
                    enabled: true,
                    label: 'Product title font size',
                    defaultValue: '18',
                    widget: 'counter',
                },
                titleFontStyle: {
                    enabled: true,
                    label: 'Product title font style',
                    defaultValue: {
                        label: 'Title Font style',
                        styles: {
                            bold: {
                                active: true,
                                value: 'bold'
                            },
                            italic: {
                                active: false,
                                value: 'italic'
                            },
                            underline: {
                                active: false,
                                value: 'underline'
                            }
                        }
                    },
                    widget: 'title_font_styles',
                },
                titleColor: {
                    enabled: true,
                    label: 'Product title color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                titleAligment: {
                    enabled: true,
                    label: 'Product title aligment',
                    defaultValue: 'left',
                    widget: 'alignment',
                },
                priceFont: {
                    label: 'Price font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                priceFontStyle: {
                    enabled: true,
                    label: 'Price font style',
                    defaultValue: {
                        label: 'Price Font style',
                        styles: {
                            bold: {
                                active: false,
                                value: 'bold'
                            },
                            italic: {
                                active: false,
                                value: 'italic'
                            },
                            underline: {
                                active: false,
                                value: 'underline'
                            }
                        }
                    },
                    widget: 'title_font_styles',
                },
                priceFontSize: {
                    enabled: true,
                    label: 'Price font size',
                    defaultValue: '14',
                    widget: 'counter',
                },
                priceColor: {
                    enabled: false,
                    label: 'Price color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                priceAligment: {
                    enabled: true,
                    label: 'Price aligment',
                    defaultValue: 'left',
                    widget: 'alignment',
                },
                quantityFont: {
                    label: 'Quantity font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                quantityFontStyle: {
                    enabled: true,
                    label: 'Quantity font style',
                    defaultValue: {
                        label: 'Price Font style',
                        styles: {
                            bold: {
                                active: false,
                                value: 'bold'
                            },
                            italic: {
                                active: false,
                                value: 'italic'
                            },
                            underline: {
                                active: false,
                                value: 'underline'
                            }
                        }
                    },
                    widget: 'title_font_styles',
                },
                quantityFontSize: {
                    enabled: true,
                    label: 'Quantity font size',
                    defaultValue: '14',
                    widget: 'counter',
                },
                quantityColor: {
                    enabled: false,
                    label: 'Quantity color',
                    defaultValue: '#667085',
                    widget: 'color_picker',
                },
                quantityAligment: {
                    enabled: true,
                    label: 'Quantity aligment',
                    defaultValue: 'left',
                    widget: 'alignment',
                },
                btn: {
                    label: 'Button Content',
                    defaultValue: 'Buy it Now',
                    widget: 'text',
                },
                btnFontSize: {
                    enabled: true,
                    label: 'Button font size',
                    defaultValue: '14',
                    widget: 'counter',
                },
                btnColor: {
                    enabled: true,
                    label: 'Button color',
                    defaultValue: '#0044D9',
                    widget: 'color_picker',
                },
                btnBg: {
                    enabled: true,
                    label: 'Button  background color',
                    defaultValue: '#F4FAFF',
                    widget: 'color_picker',
                },
                btnBorder: {
                    label: 'Button border',
                    defaultValue: '',
                    widget: 'border',
                },
                recovery: {
                    label: 'Checkout Content',
                    defaultValue: 'Recover cart',
                    widget: 'text',
                },
                recoveryFontSize: {
                    enabled: true,
                    label: 'Checkout font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                recoveryColor: {
                    enabled: true,
                    label: 'Checkout color',
                    defaultValue: '#fff',
                    widget: 'color_picker',
                },
                recoveryBg: {
                    enabled: true,
                    label: 'Checkout background color',
                    defaultValue: '#0B68FF',
                    widget: 'color_picker',
                },
                recoveryBorder: {
                    label: 'Checkout border',
                    defaultValue: '',
                    widget: 'border',
                },
            },
        },
    },
    propertyStates: (values) => {
        let titleProps = {};
        let priceProps = {};
        let quantityProps = {};
        let btnProps = {};
        let recoveryProps = {};
        if (!values.details.details.name) {
            titleProps = {
                titleFont: {
                    enabled: false
                },
                titleFontSize: {
                    enabled: false
                },
                titleColor: {
                    enabled: false
                },
                titleAligment: {
                    enabled: false
                },
                titleFontStyle: {
                    enabled: false
                }
            }
        }
        else {
            titleProps = {
                titleFont: {
                    enabled: true
                },
                titleFontSize: {
                    enabled: true
                },
                titleColor: {
                    enabled: true
                },
                titleAligment: {
                    enabled: true
                },
                titleFontStyle: {
                    enabled: true
                }
            }
        }
        if (!values.details.details.price) {
            priceProps = {
                titleFont: {
                    enabled: false
                },
                priceFontSize: {
                    enabled: false
                },
                priceColor: {
                    enabled: false
                },
                priceAligment: {
                    enabled: false
                },
                priceFontStyle: {
                    enabled: false
                }
            }
        }
        else {
            priceProps = {
                titleFont: {
                    enabled: true
                },
                priceFontSize: {
                    enabled: true
                },
                priceColor: {
                    enabled: true
                },
                priceAligment: {
                    enabled: true
                },
                priceFontStyle: {
                    enabled: true
                }
            }
        }
        if (!values.details.details.quantity) {
            quantityProps = {
                quantityFont: {
                    enabled: false
                },
                quantityFontSize: {
                    enabled: false
                },
                quantityColor: {
                    enabled: false
                },
                quantityAligment: {
                    enabled: false
                },
                quantityFontStyle: {
                    enabled: false
                }
            }
        }
        else {
            quantityProps = {
                quantityFont: {
                    enabled: true
                },
                quantityFontSize: {
                    enabled: true
                },
                quantityColor: {
                    enabled: true
                },
                quantityAligment: {
                    enabled: true
                },
                quantityFontStyle: {
                    enabled: true
                }
            }
        }
        if (!values.details.details.button) {
            btnProps = {
                btn: {
                    enabled: false
                },
                btnFontSize: {
                    enabled: false
                },
                btnColor: {
                    enabled: false
                },
                btnBg: {
                    enabled: false
                },
                btnBorder: {
                    enabled: false
                }
            }
        }
        else {
            btnProps = {
                btn: {
                    enabled: true
                },
                btnFontSize: {
                    enabled: true
                },
                btnColor: {
                    enabled: true
                },
                btnBg: {
                    enabled: true
                },
                btnBorder: {
                    enabled: true
                }
            }
        }
        if (!values.details.details.recovery) {
            recoveryProps = {
                recovery: {
                    enabled: false
                },
                recoveryFontSize: {
                    enabled: false
                },
                recoveryColor: {
                    enabled: false
                },
                recoveryBg: {
                    enabled: false
                },
                recoveryBorder: {
                    enabled: false
                }
            }
        }
        else {
            btnProps = {
                recovery: {
                    enabled: true
                },
                recoveryFontSize: {
                    enabled: true
                },
                recoveryColor: {
                    enabled: true
                },
                recoveryBg: {
                    enabled: true
                },
                recoveryBorder: {
                    enabled: true
                }
            }
        }
        return {
            ...titleProps,
            ...priceProps,
            ...quantityProps,
            ...btnProps,
            ...recoveryProps,
        }
    },
    renderer: {
        Viewer: unlayer.createViewer({
            render(values) {
                return eventsTemplateViewer(values);
            },
        }),
        exporters: {
            web: function (values) {
                return eventsTemplate(values);
            },
            email: function (values) {
                return eventsTemplate(values);
            },
        },
        head: {
            css: ProductStyles(),
            js: function (values) {},
        },
    },
});


const labelsMap = {
    product: {
        button: 'Button',
        comparisonPrice: 'Comparison Price',
        description: 'Description',
        image: 'Image',
        price: 'Price',
        productType: 'Product type',
        title: 'Title',
    },
    coupon: {
        coupon: 'Coupon title',
        startsAt: 'Valid from',
        expireDate: 'Expiry Date',
        couponValue: 'Discount value',
        couponType: 'Discount type',
        link: 'CTA',
    },
    cart: {
        name: 'Item name',
        price: 'Item price',
        quantity: 'Item quantity',
        button: 'Item button',
        recovery: 'Checkout',
        image: 'Item image'
    },
    review: {
        image: 'Image',
        date: 'Date',
        reviewContent: 'Review content',
        userName: 'User name',
        productName: 'Product Name',
        rating: 'Rating',
        cta: 'CTA',
    },
    recomendation: {
        image: 'Image',
        name: 'Title',
        price: 'Price',
        button: 'CTA',
    }
}

unlayer.registerPropertyEditor({
    name: 'product_details',
    layout: 'bottom',
    Widget: unlayer.createWidget({
        render(value) {
            const options = Object.keys(value.details)
            return renderDetails(labelsMap[value.title], options, value)
        },
        mount(node, value, updateValue, data) {
            optionsList = node.querySelectorAll('input');
            const details = {...value.details}
            optionsList.forEach(item => {
                item.onchange = function(e) {
                     details[e.target.name] = e.target.checked
                     return updateValue({...value, details: {...details}})
                }
            })
        }
    })
});


unlayer.registerPropertyEditor({
    name: 'title_font_styles',
    layout: 'bottom',
    Widget: unlayer.createWidget({
        render(value) {
            const options = Object.keys(value.styles)
            return renderTitleFontStyle(options, value)
        },
        mount(node, value, updateValue, data) {
            optionsList = node.querySelectorAll('input');
            const details = {...value.styles}
            optionsList.forEach(item => {
                item.onchange = function(e) {
                    console.log({details, event: e})
                    const option = {[e.target.name]: {...details[e.target.name], active: e.target.checked}}
                    return updateValue({...value, styles: {...details, ...option}})
                }
            })
        }
    })
});

unlayer.registerPropertyEditor({
    name: 'descr_font_styles',
    layout: 'bottom',
    Widget: unlayer.createWidget({
        render(value) {
            const options = Object.keys(value)
            return renderDescrFontStyle(options, value)
        },
        mount(node, value, updateValue, data) {
            optionsList = document.querySelectorAll('.descr-font-style input');
            const details = {...value}
            optionsList.forEach(item => {
                item.onchange = function(e) {
                    console.log({details, event: e})
                    const option = {[e.target.name]: {...details[e.target.name], active: e.target.checked}}
                    return updateValue({...details, ...option})
                }
            })
        }
    })
});

unlayer.registerPropertyEditor({
    name: 'layout',
    layout: 'bottom',
    Widget: unlayer.createWidget({
        render(value) {
            return layoutsList(value)
        },
        mount(node, value, updateValue) {
            layoutsOptions = node.querySelectorAll('input');
            const layouts = [...value];
            const newLayouts = []
            layoutsOptions.forEach((item, i) => {
                newLayouts.push({...layouts[i], active: false})
                item.onchange = function(e) {
                    const layoutIndex = newLayouts.findIndex(item => item.value === e.target.value)
                    newLayouts[layoutIndex].active = e.target.checked
                    console.log({layouts, layoutIndex})
                    return updateValue(newLayouts)
                }
            })
        }
    })
});

unlayer.registerPropertyEditor({
    name: 'product_content',
    layout: 'bottom',
    Widget: unlayer.createWidget({
        render( value, updateValue, data) {
            return productSelect(value, data)
        },
        mount(node, value, updateValue) {

            const handleClickListItem = (e) => {
                const li = e.target.closest('.list-item');

                const select = li.closest('.selectMultiple');
                select.classList.add('clicked');

                const a = document.createElement('a');
                a.dataset.value = li.dataset.value;
                a.innerHTML = `<em>${li.innerText}</em><i></i>`;
                a.classList.add('notShown');

                select.querySelector('div').appendChild(a);

                Array.from(document.getElementsByClassName('prodOption')).forEach((option) => {
                        if (option.value === li.dataset.value) {
                            option.selected = true
                            document.querySelector('select[multiple]').dispatchEvent(new Event('change'))
                        }
                    }
                )

                li.remove();

                select.querySelector('span').classList.add('hide');
                select.classList.remove('clicked');
            }

            const handleClickSelectedItem = (e) => {
                const a = e.target.closest('a');
                const select = e.target.closest('.selectMultiple');

                if (!a) {
                    return;
                }

                a.className = '';
                a.classList.add('remove');
                select.classList.add('open');
                const selectEl = select.querySelector('select');

                Array.from(document.getElementsByClassName('prodOption')).forEach((option) => {
                        if (option.value === a.dataset.value) {
                            option.selected = false
                            document.querySelector('select[multiple]').dispatchEvent(new Event('change'))
                        }
                    }
                )

                const li = document.createElement('li');
                li.dataset.value = a.dataset.value;
                li.classList.add('list-item');
                li.innerText = a.querySelector('em').innerText;
                select.querySelector('ul').appendChild(li);

                if (!selectEl.selectedOptions.length) {
                    select.querySelector('span').classList.remove('hide');
                }

                a.remove();
            }

            document.querySelector('select[multiple]').onchange = function() {
                const newVal = []
                Array.from(document.getElementsByClassName('prodOption')).forEach(option => {
                    if(option.selected) {
                        newVal.push(option.value)
                    }
                })
                updateValue({...value, products: newVal})
                const layoutItem = document.querySelector('.layout-list .three-columns')
                if (newVal.length > 2) {
                    layoutItem.classList.remove('disabled')
                } else {
                    layoutItem.classList.add('disabled')
                }
            }

            if (!document.querySelector('.selectMultiple')) {
                const select = document.querySelector('select[multiple]');
                const selectOptions = document.getElementsByClassName('prodOption');

                const newSelect = document.createElement('div');
                newSelect.classList.add('selectMultiple');

                const active = document.createElement('div');
                active.classList.add('active');

                const search = document.createElement('input');
                search.classList.add('search-field');
                search.setAttribute('placeholder', 'Search Products');

                const optionList = document.createElement('ul');
                const placeholder = select.dataset.placeholder;

                const searchItem =  document.createElement('li');
                searchItem.classList.add('search-item');
                searchItem.innerHTML = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                    '<path d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                    '</svg>'
                searchItem.appendChild(search)

                const placeholderElement = document.createElement('span');
                placeholderElement.innerText = placeholder;
                placeholderElement.classList.add('placeholder');
                active.appendChild(placeholderElement);
                optionList.appendChild(searchItem);


                search.addEventListener('keyup', (e) => {
                    let newOptions = document.querySelectorAll('.selectMultiple ul .list-item')
                    if (e.target.value) {
                        newOptions.forEach(function (item) {
                            if (!item.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
                                item.classList.add('hide')
                            } else {
                                item.classList.remove('hide')
                            }
                        })
                        return
                    }
                    newOptions.forEach(function (item) {
                        item.classList.remove('hide')
                    })
                })

                Array.from(selectOptions).forEach(
                    function(option) {
                        let text = option.innerText;

                        if (option.selected) {
                            let tag = document.createElement('a');
                            tag.dataset.value = option.value;
                            tag.innerHTML = `<em>${text}</em><i></i>`;
                            active.appendChild(tag);
                            placeholderElement.classList.add('hide');
                        } else {
                            const item = document.createElement('li');
                            item.classList.add('list-item');
                            item.dataset.value = option.value;
                            item.innerHTML = text;
                            optionList.appendChild(item);
                        }
                    }
                );

                const arrow = document.createElement('div');
                arrow.classList.add('arrow');
                active.appendChild(arrow);

                newSelect.appendChild(active);
                newSelect.appendChild(optionList);

                select.parentElement.append(newSelect);
                placeholderElement.appendChild(select);

                document.querySelector('.selectMultiple ul').removeEventListener('click', handleClickListItem);
                document.querySelector('.selectMultiple > div').removeEventListener('click', handleClickSelectedItem);

                document.querySelector('.selectMultiple ul').addEventListener('click', handleClickListItem);
                document.querySelector('.selectMultiple > div').addEventListener('click', handleClickSelectedItem);

                document.querySelectorAll('.selectMultiple > div, .selectMultiple > div span').forEach((el) => {
                    el.addEventListener('click', (e) => {
                        el.closest('.selectMultiple').classList.toggle('open');
                    });
                });

                document.addEventListener('mouseup', function (e) {
                    const container = document.querySelector('.selectMultiple');
                    if (!container.contains(e.target)) {
                        container.classList.remove('open')
                    }
                });

            }

        }
    })
});

//  Yotpo tool ---- START ------------

const roundHalf = (num) => {
    return Math.round(num*2)/2;
}

const generateRating = (rating) => {
    switch (rating) {
        case (0): return `
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
        `
        case (0.5): return `
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/half-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
        `
        case (1): return `
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
        `
        case (1.5): return `
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/half-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
        `
        case (2): return `
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
            <img alt="0"  style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
        `
        case (2.5): return `
            <img alt="0"  style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0"  style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0"  style="width: 16px;" src="https://mkravtsov03.github.io/half-star.png" />
            <img alt="0"  style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
            <img alt="0"  style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
        `
        case (3): return `
            <img alt="0"  style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
        `
        case (3.5): return `
            <img alt="0"  style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0"  style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0"  style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/half-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
        `
        case (4): return `
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0"  style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/empty-star.png" />
        `
        case (4.5): return `
             <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/half-star.png" />
        `
        case (5): return `
             <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
            <img alt="0" style="width: 16px;" src="https://mkravtsov03.github.io/full-star.png" />
        `
    }
}

const mapReviews = (filteredReviews) => {
    return filteredReviews.reduce((acc, productWithReviews) => {
        const { yotpo_product_id, product_name, product_images_array }  = productWithReviews;
        const reviews = productWithReviews.reviews.map(review => {
            return {
                ...review,
                yotpo_product_id,
                product_name,
                product_images_array
            }
        })
        return acc = [...acc, ...reviews];
    }, [])
}

const productFiltering = (reviews, filter) => {
    if (filter.length) {
        return reviews.filter(review => filter.includes(String(review.yotpo_product_id)));
    }
    return reviews
}

const searchFiltering = (reviews, search) => {
    if (search.length) {
        return reviews.filter(review => review.review_content.includes(search));
    }
    return reviews
}

const imgPlaceholder = 'https://storage.cloud.google.com/moda-platform-dev-us-central1-ui-connectors-icons/connector_icons/image/live/image_placeholder.svg?authuser=2'

const oneColumnRender = (review, details, values) =>`
            <div style="width: 100%; border: 1px solid #E4E7EC; border-radius: 12px; overflow: hidden; margin-bottom: 20px;">
                ${details?.image ? `
                    <div style="overflow: hidden;">
                        <img style="max-width: 100%; width: 100%; object-fit: contain;" src="${review?.product_images_array?.length ? review?.product_images_array[0]?.original : imgPlaceholder}" alt="${review?.product_name}">
                    </div>
                ` : ''}
                ${details?.cta ? `
                    <div style="padding: 20px 10px; text-align: center;">    
                        <a style="font-weight: 400;
                                   text-align: center;
                                   vertical-align: middle;
                                   background-color: #000;
                                   border-radius: 8px;
                                   padding: 0.75rem;
                                   font-size: 1rem;
                                   line-height: 1.5;
                                   transition: color .15s ease-in-out,background-color .15s ease-in-out, border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                                   cursor: pointer;
                                   max-width: 300px;
                                   text-decoration: none;
                                   font-family: ${values.btnFont.value};
                                   border-left: ${values.btnBorder.borderLeftWidth} ${values.btnBorder.borderLeftStyle} ${values.btnBorder.borderLeftColor}; 
                                   border-top: ${values.btnBorder.borderTopWidth} ${values.btnBorder.borderTopStyle} ${values.btnBorder.borderTopColor}; 
                                   border-right: ${values.btnBorder.borderRightWidth} ${values.btnBorder.borderRightStyle} ${values.btnBorder.borderRightColor}; 
                                   border-bottom: ${values.btnBorder.borderBottomWidth} ${values.btnBorder.borderBottomStyle} ${values.btnBorder.borderBottomColor}; 
                                   color: ${values.btnColor};
                                   font-size: ${values.btnFontSize}px; 
                                   background-color: ${values.btnBg};" 
                                   href="" target="_blank">
                                ${values.btn}
                        </a>
                    </div>
                ` : ''}
                <table style="width: 100%;">
                    <tbody>
                        <tr>
                            <td>
                                <table style="width: 100%; ">
                                    <tbody>
                                        <tr>
                                            <td style="padding: 15px;">
                                                ${details?.userName ? `<span style="color: #101828;">${review?.user_display_name}</span>
                                                •` : ''}
                                                 ${details?.productName ? `<span style="max-width: 200px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;margin-right: 10px; color: #667085;">${review?.product_name}</span>` : ''}
                                            </td>
                                            <td style="text-align: right;padding: 15px;">
                                                ${details?.date ? `<span style="color: #667085;">${new Date(review?.review_date).toLocaleDateString()}</span>` : ''}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 0 15px;">
                                                ${details?.rating ? `
                                                    <div style="margin-bottom: 15px;">
                                                        ${generateRating(roundHalf(review?.review_score))}
                                                    </div>` : ''
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style="padding: 0 15px 15px;">
                                                ${details?.reviewContent ? `
                                                     <div class="review__content" style="font-family: ${values.reviewFont.value}; font-size: ${values.reviewFontSize}px; color: ${values.reviewColor}; line-height: 20px;">
                                                        ${review?.review_content}
                                                     </div>` : ''
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
`

// const pp = `
// <div class="review" style="border: none;">
//     <div class="review__inner">
//         <div class="review__heading">
//             <div class="review__info">
//                 ${details?.userName ? `<div class="review__title">${review?.user_display_name}</div>
//                 •` : ''}
//                 ${details?.productName ? `<div class="review__product-name">${review?.product_name}</div>` : ''}
//             </div>
//             ${details?.date ? `<div class="review__date">${review?.review_date}</div>` : ''}
//
//         </div>
//         ${details?.rating ? `
//             <div class="review__rating">
//                 ${generateRating(roundHalf(review?.review_score))}
//             </div>` : ''}
//         ${details?.reviewContent ? `
//              <div class="review__content" style="font-family: ${values.reviewFont.value}; font-size: ${values.reviewFontSize}px; color: ${values.reviewColor}">
//                 ${review?.review_content}
//              </div>` : ''}
//     </div>
// </div>
// `

const twoColumnsRender = (review, details, values) =>`
            <div style="float: left; max-width: calc(50% - 12px); margin: 0 5px 10px; width: 100%; border: 1px solid #E4E7EC; border-radius: 12px; overflow: hidden;">
                ${details?.image ? `
                    <div style="overflow: hidden;">
                        <img style="max-width: 100%; width: 100%; object-fit: contain; display: block;" src="${review?.product_images_array?.length ? review?.product_images_array[0]?.original : imgPlaceholder}" alt="${review?.product_name}">
                    </div>
                ` : ''}
                ${details?.cta ? `
                    <div style="padding: 20px 10px; text-align: center;">    
                        <a style="font-weight: 400;
                                   text-align: center;
                                   vertical-align: middle;
                                   background-color: #000;
                                   border-radius: 8px;
                                   padding: 0.75rem;
                                   font-size: 1rem;
                                   line-height: 1.5;
                                   transition: color .15s ease-in-out,background-color .15s ease-in-out, border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                                   cursor: pointer;
                                   max-width: 300px;
                                   text-decoration: none;
                                   font-family: ${values.btnFont.value};
                                   border-left: ${values.btnBorder.borderLeftWidth} ${values.btnBorder.borderLeftStyle} ${values.btnBorder.borderLeftColor}; 
                                   border-top: ${values.btnBorder.borderTopWidth} ${values.btnBorder.borderTopStyle} ${values.btnBorder.borderTopColor}; 
                                   border-right: ${values.btnBorder.borderRightWidth} ${values.btnBorder.borderRightStyle} ${values.btnBorder.borderRightColor}; 
                                   border-bottom: ${values.btnBorder.borderBottomWidth} ${values.btnBorder.borderBottomStyle} ${values.btnBorder.borderBottomColor}; 
                                   color: ${values.btnColor};
                                   font-size: ${values.btnFontSize}px; 
                                   background-color: ${values.btnBg};" 
                                   href="" target="_blank">
                                ${values.btn}
                        </a>
                    </div>
                ` : ''}
                
                <table style="width: 100%;">
                    <tbody>
                        <tr>
                            <td>
                                <table style="width: 100%; ">
                                    <tbody>
                                        <tr>
                                            <td style="padding: 10px 7px;">
                                                ${details?.userName ? `<span style="color: #101828;">${review?.user_display_name}</span>
                                                •` : ''}
                                                 ${details?.productName ? `<span style="max-width: 200px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;margin-right: 10px; color: #667085;">${review?.product_name}</span>` : ''}
                                            </td>
                                            <td style="text-align: right;padding: 10px 7px;">
                                                ${details?.date ? `<span style="color: #667085;">${new Date(review?.review_date).toLocaleDateString()}</span>` : ''}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 0 7px;">
                                                ${details?.rating ? `
                                                    <div style="margin-bottom: 15px;">
                                                        ${generateRating(roundHalf(review?.review_score))}
                                                    </div>` : ''
}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style="padding: 0 7px 10px;">
                                                ${details?.reviewContent ? `
                                                     <div class="review__content" style="font-family: ${values.reviewFont.value}; font-size: ${values.reviewFontSize}px; color: ${values.reviewColor}; line-height: 20px;">
                                                        ${review?.review_content}
                                                     </div>` : ''
}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
`

const twoColumnsReverseRender = (review, details, values) =>`
            <div style="float: left; max-width: calc(50% - 12px); margin: 0 5px 10px; width: 100%; border: 1px solid #E4E7EC; border-radius: 12px; overflow: hidden;">
                <div class="review" style="border: none;">
                    <div class="review__inner">
                        <div class="review__heading" style="display: block;">
                            <div class="review__info" style="margin-bottom: 5px;">
                                ${details?.userName ? `<div class="review__title">${review?.user_display_name}</div>
                                •` : ''}
                                ${details?.productName ? `<div class="review__product-name">${review?.product_name}</div>` : ''}
                            </div>
                            ${details?.date ? `<div class="review__date">${new Date(review?.review_date).toLocaleDateString()}</div>` : ''}
                            
                        </div>
                        ${details?.rating ? `
                            <div class="review__rating">
                                ${generateRating(roundHalf(review?.review_score))}
                            </div>` : ''}
                        ${details?.reviewContent ? `
                             <div class="review__content" style="font-family: ${values.reviewFont.value}; font-size: ${values.reviewFontSize}px; color: ${values.reviewColor}">
                                ${review?.review_content}
                             </div>` : ''}
                    </div>
                </div>
                ${details?.cta ? `
                    <div style="padding: 20px 10px; text-align: center;">    
                        <a style="font-weight: 400;
                                   text-align: center;
                                   vertical-align: middle;
                                   background-color: #000;
                                   border-radius: 8px;
                                   padding: 0.75rem;
                                   font-size: 1rem;
                                   line-height: 1.5;
                                   transition: color .15s ease-in-out,background-color .15s ease-in-out, border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                                   cursor: pointer;
                                   max-width: 300px;
                                   text-decoration: none;
                                   font-family: ${values.btnFont.value};
                                   border-left: ${values.btnBorder.borderLeftWidth} ${values.btnBorder.borderLeftStyle} ${values.btnBorder.borderLeftColor}; 
                                   border-top: ${values.btnBorder.borderTopWidth} ${values.btnBorder.borderTopStyle} ${values.btnBorder.borderTopColor}; 
                                   border-right: ${values.btnBorder.borderRightWidth} ${values.btnBorder.borderRightStyle} ${values.btnBorder.borderRightColor}; 
                                   border-bottom: ${values.btnBorder.borderBottomWidth} ${values.btnBorder.borderBottomStyle} ${values.btnBorder.borderBottomColor}; 
                                   color: ${values.btnColor};
                                   font-size: ${values.btnFontSize}px; 
                                   background-color: ${values.btnBg};" 
                                  href="" target="_blank">
                                ${values.btn}
                        </a>
                    </div>
                ` : ''}
                ${details?.image ? `
                    <div style="overflow: hidden;">
                        <img style="max-width: 100%; width: 100%; object-fit: contain; display: block;" src="${review?.product_images_array?.length ? review?.product_images_array[0]?.original : imgPlaceholder}" alt="${review?.product_name}">
                    </div>
                ` : ''}
            </div>
`

const reviewsRender = (selectedReviews, layout, details, values) => {
    switch(layout) {
        case ('two-columns'):
            return `
            <div style="overflow: hidden; background: #fff; padding: 20px 5px 0;">
                ${selectedReviews.map(review => twoColumnsRender(review, details, values)).join('')}
            </div>
        `
        case ('two-columns--reverse'):
            return `
            <div style="overflow: hidden; background: #fff; padding: 20px 5px 0;">
                ${selectedReviews.map((review, index) => index % 2 == 0 ? twoColumnsRender(review, details, values) : twoColumnsReverseRender(review, details, values)).join('')}
            </div>
        `
        default:
            return `
            <div style="overflow: hidden; background: #fff; padding: 20px 10px 0;">
                ${selectedReviews.map(review => oneColumnRender(review, details, values)).join('')}
            </div>
        `
    }

}

const getYotpoTemlate = () =>  function(values) {
    console.log({values})
    const {reviews_select, data: {reviews}, layout, details: {details}} = values

    const reviewsList = reviews[reviews_select?.type]

    const selectedReviews = reviewsList?.filter(function (el) {
        return reviews_select?.activeReviews.indexOf(String(el.review_id)) >= 0;
    });

    const activeLayout = layout.find(item => item.active)?.value

    console.log('layout', activeLayout)

    return `

        <svg id="stars" style="display: none;" version="1.1">
          <symbol id="stars-empty-star" viewBox="0 0 102 18" fill="#D0D5DD">
            <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" />
          </symbol>
          <symbol id="stars-full-star" viewBox="0 0 102 18" fill="#F2A439">
            <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" />
          </symbol>
          <symbol id="stars-half-star" viewBox="0 0 102 18" fill="#F2A439">
            <use xlink:href="#stars-empty-star" />
            <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792" />
          </symbol>
        </svg>
        
        ${selectedReviews?.length ? reviewsRender(selectedReviews, activeLayout, details, values) : 
            `
            <div style="text-align: center; padding: 20px; font-size: 20px; font-weight: 600; color: #667085">
                Select reviews
            </div>
            `
        }
    `
}

const yotpoTemplate = getYotpoTemlate();

const reviewSelect = (value, data) => {
    console.log("render:", {value, data});

    const {type, activeReviews, productFilter, searchString} = value;

    const {reviews, types} = data;

    const filteredTypes = types.filter(type => type.value !== 'aggregated_reviews')

    const filteredReviews = reviews[type];

    const reviewsList = searchFiltering(productFiltering(filteredReviews, productFilter), searchString)

    const products = reviews?.product_reviews?.reduce((acc, product) => {
        if (!acc.find(prod => prod.productId == product.yotpo_product_id)) {
            acc.push({productId: product.yotpo_product_id, productName: product.product_name});
        }
        return acc;
    }, []) || []

    return `


    <svg id="stars" style="display: none;" version="1.1">
      <symbol id="stars-empty-star" viewBox="0 0 102 18" fill="#D0D5DD">
        <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" />
      </symbol>
      <symbol id="stars-full-star" viewBox="0 0 102 18" fill="#F2A439">
        <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" />
      </symbol>
      <symbol id="stars-half-star" viewBox="0 0 102 18" fill="#F2A439">
        <use xlink:href="#stars-empty-star" />
        <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792" />
      </symbol>
    </svg>

    <div class="blockbuilder-widget-label">
        <p class="blockbuilder-label-primary">Select data</p>
    </div>
    <select disabled style="margin-bottom: 20px;" class="form-control" data-placeholder="Select products">
        <option selected value="yotpo">
            Yotpo
        </option>
    </select>
    <select value="${value.type}" id="review_type_select" class="form-control" style="margin-bottom: 20px;" data-placeholder="Select review type">
        ${filteredTypes?.map(option => 
            `
                <option ${option.value == value.type ? 'selected' : ''}  value="${option.value}">
                    ${option.label}
                </option>
            `
        ).join('')}
    </select>

    <div class="filters">
        
        <div class="search-filter">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input type="text" class="form-control" value="${searchString}" id="filter-search">
        </div>
        
        <select multiple data-placeholder="All products">
            ${products?.map(product =>
                `
                    <option ${productFilter.includes(String(product.productId)) ? 'selected' : ''} class="prodOption" value="${product.productId}">
                        ${product.productName}
                    </option>
                `
            )}
        </select>
    </div>
     
    <div class="reviews-list">
        ${reviewsList?.length  ? reviewsList?.map(review => {
                console.log('checked', activeReviews.includes(String(review?.review_id)))
                return `
                    <label class="review">
                        <div class="review__inner">
                            <div class="review__heading">
                                <div class="review__info">
                                    <div class="review__title">${review?.user_display_name}</div>
                                    •
                                    <div class="review__product-name">${review?.product_name}</div>
                                </div>
                                <div class="review__date">${new Date(review?.review_date).toLocaleDateString()}</div>
                            </div>
                            <div class="review__rating">
                                ${generateRating(roundHalf(review?.review_score))}
                            </div>
                            <div class="review__content">
                                ${review?.review_content}
                            </div>
                        </div>
                        <div class="details-item">
                             <input class="review__checkbox" ${activeReviews.includes(String(review?.review_id)) ? 'checked' : ''} name="${review?.review_id}" data-id="${review?.review_id}" data-productId="${review?.yotpo_product_id}" type="checkbox">
                        </div>
                    </label>
                `
                }
    ).join('') : <div style="text-align: center; ">No reviews</div>}
    </div>
`
}


unlayer.registerPropertyEditor({
    name: 'review_source_select',
    layout: 'bottom',
    Widget: unlayer.createWidget({
        render(value, updateValue, data) {
            return reviewSelect(value, data)
        },
        mount(node, value, updateValue) {
            console.log("mount:", {value});

            const typeSelect = document.getElementById('review_type_select');

            typeSelect.addEventListener('change', () => {
                console.log(typeSelect.value);
                return updateValue({...value, type: typeSelect.value})
            });

            const reviewsChecks = node.querySelectorAll('.review');
            let activeReviews = [...value?.activeReviews]
            reviewsChecks.forEach((item, i) => {
                item.addEventListener('click', function(e) {
                    console.log(item)
                    if (item.querySelector('input').checked) {
                        activeReviews.push(item.querySelector('input').dataset.id)
                    } else {
                        activeReviews = activeReviews.filter(reviewId => reviewId !== item.querySelector('input').dataset.id)
                        console.log(activeReviews)
                    }
                    return updateValue({...value, activeReviews})
                })
            })

            // filters

            // products filter START

            const handleClickListItem = (e) => {
                const li = e.target.closest('.list-item');

                const select = li.closest('.selectMultiple');
                select.classList.add('clicked');

                const a = document.createElement('a');
                a.dataset.value = li.dataset.value;
                a.innerHTML = `<em>${li.innerText}</em><i></i>`;
                a.classList.add('notShown');

                select.querySelector('div').appendChild(a);

                Array.from(document.getElementsByClassName('prodOption')).forEach((option) => {
                        if (option.value === li.dataset.value) {
                            option.selected = true
                            document.querySelector('select[multiple]').dispatchEvent(new Event('change'))
                        }
                    }
                )

                li.remove();

                select.querySelector('span').classList.add('hide');
                select.classList.remove('clicked');
            }

            const handleClickSelectedItem = (e) => {
                const a = e.target.closest('a');
                const select = e.target.closest('.selectMultiple');

                if (!a) {
                    return;
                }

                a.className = '';
                a.classList.add('remove');
                select.classList.add('open');
                const selectEl = select.querySelector('select');

                Array.from(document.getElementsByClassName('prodOption')).forEach((option) => {
                        if (option.value === a.dataset.value) {
                            option.selected = false
                            document.querySelector('select[multiple]').dispatchEvent(new Event('change'))
                        }
                    }
                )

                const li = document.createElement('li');
                li.dataset.value = a.dataset.value;
                li.classList.add('list-item');
                li.innerText = a.querySelector('em').innerText;
                select.querySelector('ul').appendChild(li);

                if (!selectEl.selectedOptions.length) {
                    select.querySelector('span').classList.remove('hide');
                }

                a.remove();
            }

            document.querySelector('select[multiple]').onchange = function() {
                const newVal = []
                Array.from(document.getElementsByClassName('prodOption')).forEach(option => {
                    if(option.selected) {
                        newVal.push(option.value)
                    }
                })
                updateValue({...value, productFilter: newVal})
                // const layoutItem = document.querySelector('.layout-list .three-columns')
                // if (newVal.length > 2) {
                //     layoutItem.classList.remove('disabled')
                // } else {
                //     layoutItem.classList.add('disabled')
                // }
            }

            if (!document.querySelector('.selectMultiple')) {
                const select = document.querySelector('select[multiple]');
                const selectOptions = document.getElementsByClassName('prodOption');

                const newSelect = document.createElement('div');
                newSelect.classList.add('selectMultiple');

                const active = document.createElement('div');
                active.classList.add('active');

                const search = document.createElement('input');
                search.classList.add('search-field');
                search.setAttribute('placeholder', 'Search Products');

                const optionList = document.createElement('ul');
                const placeholder = select.dataset.placeholder;

                const searchItem =  document.createElement('li');
                searchItem.classList.add('search-item');
                searchItem.innerHTML = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                    '<path d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                    '</svg>'
                searchItem.appendChild(search)

                const placeholderElement = document.createElement('span');
                placeholderElement.innerText = placeholder;
                placeholderElement.classList.add('placeholder');
                active.appendChild(placeholderElement);
                optionList.appendChild(searchItem);


                search.addEventListener('keyup', (e) => {
                    let newOptions = document.querySelectorAll('.selectMultiple ul .list-item')
                    if (e.target.value) {
                        newOptions.forEach(function (item) {
                            if (!item.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
                                item.classList.add('hide')
                            } else {
                                item.classList.remove('hide')
                            }
                        })
                        return
                    }
                    newOptions.forEach(function (item) {
                        item.classList.remove('hide')
                    })
                })

                Array.from(selectOptions).forEach(
                    function(option) {
                        let text = option.innerText;

                        if (option.selected) {
                            let tag = document.createElement('a');
                            tag.dataset.value = option.value;
                            tag.innerHTML = `<em>${text}</em><i></i>`;
                            active.appendChild(tag);
                            placeholderElement.classList.add('hide');
                        } else {
                            const item = document.createElement('li');
                            item.classList.add('list-item');
                            item.dataset.value = option.value;
                            item.innerHTML = text;
                            optionList.appendChild(item);
                        }
                    }
                );

                const arrow = document.createElement('div');
                arrow.classList.add('arrow');
                active.appendChild(arrow);

                newSelect.appendChild(active);
                newSelect.appendChild(optionList);

                select.parentElement.append(newSelect);
                placeholderElement.appendChild(select);

                document.querySelector('.selectMultiple ul').removeEventListener('click', handleClickListItem);
                document.querySelector('.selectMultiple > div').removeEventListener('click', handleClickSelectedItem);

                document.querySelector('.selectMultiple ul').addEventListener('click', handleClickListItem);
                document.querySelector('.selectMultiple > div').addEventListener('click', handleClickSelectedItem);

                document.querySelectorAll('.selectMultiple > div, .selectMultiple > div span').forEach((el) => {
                    el.addEventListener('click', (e) => {
                        el.closest('.selectMultiple').classList.toggle('open');
                    });
                });

                document.addEventListener('mouseup', function (e) {
                    const container = document.querySelector('.selectMultiple');
                    if (!container.contains(e.target)) {
                        container.classList.remove('open')
                    }
                });

            }

            // products filter END

            // Search filter START

            const searchFilter = document.getElementById('filter-search');

            searchFilter.addEventListener('change', (e) => {
                if (e.target.value.length == 0 || e.target.value.length > 2) {
                    return updateValue({...value, searchString: e.target.value})
                }
            });

            // Search filter END



        }
    })
});

unlayer.registerTool({
    name: 'yotpo_tool',
    label: 'Reviews',
    icon: 'https://mkravtsov03.github.io/yotpo_tool_icon.svg',
    supportedDisplayModes: ['web', 'email', 'popup'],
    options: {
        review: {
            title: 'Review',
            position: 1,
            options: {
                reviews_select: {
                    label: '',
                    defaultValue: { type: "product_reviews", activeReviews: [], searchString: '', productFilter: [], ratingFilter: [] },
                    widget: 'review_source_select',
                },
                details: {
                    label: 'Details',
                    defaultValue: {title: 'review', details: {image: true, date: true, reviewContent: true, rating: true, productName: true, userName: true, cta: true}},
                    widget: 'product_details',
                },
                layout: {
                    label: 'layout',
                    defaultValue: [
                        {active: true, value: 'one-column', disabled: false},
                        {active: false, value: 'two-columns', disabled: false},
                        {active: false, value: 'two-columns--reverse', disabled: false},
                        {active: false, value: 'three-columns', disabled: true},
                    ],
                    widget: 'layout',
                },
            },
        },
        formatting_options: {
            title: 'Formatting options',
            position: 2,
            options: {
                btn: {
                    label: 'Button Content',
                    defaultValue: 'Buy it Now',
                    widget: 'text',
                },
                btnFont: {
                    label: 'Button font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                btnFontSize: {
                    enabled: true,
                    label: 'Button font size',
                    defaultValue: '14',
                    widget: 'counter',
                },
                btnColor: {
                    enabled: true,
                    label: 'Button color',
                    defaultValue: '#fff',
                    widget: 'color_picker',
                },
                btnBg: {
                    enabled: true,
                    label: 'Button  background color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                btnBorder: {
                    label: 'Button border',
                    defaultValue: '',
                    widget: 'border',
                },
                reviewFont: {
                    label: 'Review content font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                reviewFontSize: {
                    enabled: true,
                    label: 'Review content font size',
                    defaultValue: '14',
                    widget: 'counter',
                },
                reviewColor: {
                    enabled: true,
                    label: 'Review content color',
                    defaultValue: '#667085',
                    widget: 'color_picker',
                },
            }
        }
    },
    propertyStates: (values) => {},
    renderer: {
        Viewer: unlayer.createViewer({
            render(values) {
                return yotpoTemplate(values);
            },
        }),
        exporters: {
            web: function (values) {
                return yotpoTemplate(values);
            },
            email: function (values) {
                return yotpoTemplate(values);
            },
        },
        head: {
            css: ProductStyles(),
            js: function (values) {},
        },
    },
});

// 'custom#yotpo_tool': {
//     data: {
//         reviews: fakeReviews,
//     },
//     properties: {
//         reviews_select: {
//             editor: {
//                 data: {
//                     types: [
//                         {
//                             label: 'Product Review',
//                             value: 'product_reviews',
//                         },
//                         { label: 'Website Review', value: 'site_reviews' },
//                         {
//                             label: 'Aggregated product Review',
//                             value: 'aggregated_reviews',
//                         },
//                     ],
//                         sources: [],
//                         reviews: fakeReviews,
//                 },
//             },
//         },
//     },
// },

//  Yotpo tool ---- END ------------


//  Form tool ---- START ------------

const formStyles = () => function (values) {
    console.log('style', values)
    return `
        .custom-form * {
            box-sizing: border-box;
        }
        .custom-form__item label {
           margin-bottom: 5px;
           display: block;
        }
        .custom-form__item {
            border-radius: ${values.fieldsCorners}px;
        }
        .custom-form__field {
           border-radius: ${values.fieldsCorners}px;
           min-height: 40px;
           padding: ${values.fieldsPadding}px;
           width: 100%;
           background: ${values.fieldsBg};
           font-size: ${values.fieldsFontSize}px;
           color: ${values.fieldsColor};
           border-left: ${values.fieldsBorder.borderLeftWidth} ${values.fieldsBorder.borderLeftStyle} ${values.fieldsBorder.borderLeftColor}; 
           border-top: ${values.fieldsBorder.borderTopWidth} ${values.fieldsBorder.borderTopStyle} ${values.fieldsBorder.borderTopColor}; 
           border-right: ${values.fieldsBorder.borderRightWidth} ${values.fieldsBorder.borderRightStyle} ${values.fieldsBorder.borderRightColor}; 
           border-bottom: ${values.fieldsBorder.borderBottomWidth} ${values.fieldsBorder.borderBottomStyle} ${values.fieldsBorder.borderBottomColor};      
        }
        .button-item {
            display: flex;
        }
        .custom-form__btn {
            font-weight: 400;
            text-align: center;
            vertical-align: middle;
            background-color: #000;
            border-radius: 8px;
            padding: 10px 20px;
            line-height: 1.5;
            transition: color .15s ease-in-out,background-color .15s ease-in-out, border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            cursor: pointer;
            max-width: 100%;
        }
        .consent-check {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 6px;
        }
    `
}

const mapAlignment = {
    center: 'center',
    left: 'flex-start',
    right: 'flex-end',
    justify: 'space-between'
}

const checkLink = (link) => {
    if (link.includes('https://') || link.includes('http://')) {
        return link
    }
    return `https://${link}`
}

const mapConsent = {
    gdpr: {
        label: 'Keep me updated on the latest news & offers.',
        description: (link, policyLinkColor) => `For more information on how we process your data for marketing communication, refer to our <a href="${checkLink(link)}" style="color: ${policyLinkColor};" target="_blank">Privacy policy.</a>`
    },
    tcpa: {
        label: 'Receive offers via text message.',
        description: (link, policyLinkColor) => `By checking this box, I consent to receive marketing text messages through an automatic telephone dialing system at the number provided. Consent is not a condition to purchase. Text STOP to unsubscribe or HELP for help. Msg and data rates may apply. Check our <a href="${checkLink(link)}" style="color: ${policyLinkColor};" target="_blank">Privacy policy.</a>`
    }
}



const widthRange = (value) => `
    <div>
        <div class="blockbuilder-widget-label">
            <p class="blockbuilder-label-primary">${value.label} Width</p>
        </div>
        <div class="range-wrapp">
            <input type="range" name="range" value="${value.value}" min="0" max="100" class="range">
            ${value.value}%
        </div>
        
    </div>
`

unlayer.registerPropertyEditor({
    name: 'width_range',
    layout: 'bottom',
    Widget: unlayer.createWidget({
        render( value, updateValue, data) {
            return widthRange(value)
        },
        mount(node, value, updateValue) {
            console.log('width mount', {value, node})
            const range = node.querySelector('.range')
            range.onchange = function() {
                return updateValue({...value, value: this.value})
            }
        }
    })
});

const additionalFieldsOptionsList = [
    {
        label:'First Name',
        value:'first_name',
    },
    {
        label:'Last Name',
        value:'last_name',
    },
    {
        label:'Date of Birth',
        value:'date_of_birth',
    },
];

const fieldsMap = {
    first_name: 'First Name',
    last_name: 'Last Name',
    date_of_birth: 'Date of Birth',
}



const additionalFields = (values) => {
    const filteredFields = additionalFieldsOptionsList.filter(option => !values?.activeFields?.includes(option.value))
    return `
    <div>
        <div class="blockbuilder-widget-label">
            <p class="blockbuilder-label-primary">Form additional fields</p>
        </div>
        <select class="form-control" name="additional_field" id="additional_field">
            <option>Select field</option>
            ${
                filteredFields.map(option => `<option value="${option.value}">${option.label}</option>`).join('')
            }
        </select>
        <div class="fields-list">
            ${values?.activeFields.map(field =>`
                <div data-value="${field}" class="fields-item">
                    <div class="fields-item__title">${fieldsMap[field]}</div>
                    <div class="fields-item__actions">
                        <button class="edit-field">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pencil" class="svg-inline--fa fa-pencil " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
                        </button>
                        <button class="delete-field">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
                        </button>
                    </div>
                </div>
            `).join('')}
            
        </div>
        <div class="edit-popup ${values?.editPopup.active ? 'active' : ''}">
            <form class="edit-form">
                <div class="edit-form__title">
                    Update field
                </div>
                <div class="form-item">
                     <span class="form-row">
                     <label for="label_text">
                          <p>Label text</p>
                     </label>
                     <label>
                        <input ${values?.fieldsProps[values?.editPopup?.field].label ? 'checked' : ''} type="checkbox" name="label">
                        <span>Show label</span>
                      </label>
                     </span>
                   
                     <input value="${values?.fieldsProps[values?.editPopup?.field].label_text}" type="text" name="label_text" id="label_text" class="form-control">
                 </div>
                 
                <div class="form-item">
                    <label>
                        <p>Placeholder text</p>
                        <input value="${values?.fieldsProps[values?.editPopup?.field].placeholder_text}" type="text" name="placeholder_text" class="form-control">
                    </label>
                 </div>
                 
                 <div class="form-item">
                    <label>
                        <input ${values?.fieldsProps[values?.editPopup?.field].isRequired ? 'checked' : ''} type="checkbox" name="isRequired">
                        <span>Required</span>
                    </label>
                 </div>
                 
                 <div class="edit-form__footer">
                    <button type="submit" class="edit-form__save">
                        Update field
                    </button>
                    <button class="edit-form__cancel">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
`}

const emaiPhoneEdit = (values) => {
    return `
        <div class="email-phone-edit">
            <div class="blockbuilder-widget-label">
                <p class="blockbuilder-label-primary">Email/Phone field edit</p>
            </div>
            <button class="edit-field">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pencil" class="svg-inline--fa fa-pencil " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
            </button>
            <div class="edit-popup ${values?.editPopup ? 'active' : ''}">
            <form class="edit-form">
                <div class="edit-form__title">
                    Update field
                </div>
                <div class="form-item">
                     <span class="form-row">
                     <label for="label_text">
                          <p>Label text</p>
                     </label>
                     <label>
                        <input ${values?.fieldProps.label ? 'checked' : ''} type="checkbox" name="label">
                        <span>Show label</span>
                      </label>
                     </span>
                   
                     <input value="${values?.fieldProps.label_text}" type="text" name="label_text" id="label_text" class="form-control">
                 </div>
                 
                <div class="form-item">
                    <label>
                        <p>Placeholder text</p>
                        <input value="${values?.fieldProps.placeholder_text}" type="text" name="placeholder_text" class="form-control">
                    </label>
                 </div>
                 
                 <div class="edit-form__footer">
                    <button type="submit" class="edit-form__save">
                        Update field
                    </button>
                    <button class="edit-form__cancel">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
        </div>   
    `
}

unlayer.registerPropertyEditor({
    name: 'additional_form_fields',
    layout: 'bottom',
    Widget: unlayer.createWidget({
        render( value, updateValue, data) {
            return additionalFields(value)
        },
        mount(node, value, updateValue) {
            const select = node.querySelector('#additional_field')
            const editPopup = node.querySelector('.edit-popup')
            select.onchange = function () {
                return updateValue({...value, activeFields: [...value.activeFields, this.value]})
            }
            
            const fieldItems = node.querySelectorAll('.fields-item');
            fieldItems.forEach(function(item) {
                item.querySelector('.delete-field').onclick = function() {
                    return updateValue({...value, activeFields: [...value.activeFields.filter(field => field !== item.dataset.value)]})
                }
                item.querySelector('.edit-field').onclick = function() {
                    return updateValue({...value, editPopup: {active: true, field: item.dataset.value}})
                }
            });

            const popupClose = node.querySelector('.edit-form__cancel');
            popupClose.onclick = function () {
                return updateValue({...value, editPopup: { ...value.editPopup, active: false}})
            }

            const form = node.querySelector('.edit-form');
            form.onsubmit = function (e) {
                e.preventDefault();
                const data = new FormData(form)
                let formValues = {};
                for (let [key, value] of data) {
                    formValues[key] = value
                }
                return updateValue({...value, fieldsProps: {...value.fieldsProps, [value.editPopup.field]: formValues},  editPopup: { ...value.editPopup, active: false}})
            }
        }
    })
});


unlayer.registerPropertyEditor({
    name: 'emailPhoneEdit',
    layout: 'bottom',
    Widget: unlayer.createWidget({
        render( value, updateValue, data) {
            return emaiPhoneEdit(value)
        },
        mount(node, value, updateValue) {

            node.querySelector('.edit-field').onclick = function() {
                return updateValue({...value, editPopup: true})
            }

            const popupClose = node.querySelector('.edit-form__cancel');
            popupClose.onclick = function () {
                return updateValue({...value, editPopup: false})
            }

            const form = node.querySelector('.edit-form');
            form.onsubmit = function (e) {
                e.preventDefault();
                const data = new FormData(form)
                let formValues = {};
                for (let [key, value] of data) {
                    formValues[key] = value
                }
                return updateValue({ fieldProps: {...formValues},  editPopup: false })
            }
        }
    })
});

const additionalFieldsRenderer = {
    first_name: (values) => `
        <div style="margin-bottom: ${values.fieldsGap}px" class="custom-form__item">
            ${values?.additional_form_fields?.fieldsProps?.first_name?.label ? `<label style="font-family: ${values?.labelFont.value}; font-size: ${values?.labelFontSize}px; color: ${values?.labelColor}" for="first_name">${values?.additional_form_fields?.fieldsProps?.first_name?.label_text}</label>` : ''}
            <input ${values?.additional_form_fields?.fieldsProps?.first_name?.isRequired ? 'required' : ''} class="custom-form__field" placeholder="${values?.additional_form_fields?.fieldsProps?.first_name?.placeholder_text}" type="text" name="first_name" id="first_name" />
        </div>
    `,
    last_name: (values) => `
        <div style="margin-bottom: ${values.fieldsGap}px" class="custom-form__item">
            ${values?.additional_form_fields?.fieldsProps?.last_name?.label ? `<label style="font-family: ${values?.labelFont.value}; font-size: ${values?.labelFontSize}px; color: ${values?.labelColor}" for="first_name">${values?.additional_form_fields?.fieldsProps?.last_name?.label_text}</label>` : ''}
            <input ${values?.additional_form_fields?.fieldsProps?.last_name?.isRequired ? 'required' : ''} class="custom-form__field" placeholder="${values?.additional_form_fields?.fieldsProps?.last_name?.placeholder_text}" type="text" name="last_name" id="last_name" />
        </div>
    `,
    date_of_birth: (values) => `
        <div style="margin-bottom: ${values.fieldsGap}px" class="custom-form__item">
            ${values?.additional_form_fields?.fieldsProps?.date_of_birth?.label ? `<label style="font-family: ${values?.labelFont.value}; font-size: ${values?.labelFontSize}px; color: ${values?.labelColor}" for="first_name">${values?.additional_form_fields?.fieldsProps?.date_of_birth?.label_text}</label>` : ''}
            <input ${values?.additional_form_fields?.fieldsProps?.date_of_birth?.isRequired ? 'required' : ''} class="custom-form__field" placeholder="${values?.additional_form_fields?.fieldsProps?.date_of_birth?.placeholder_text}" type="date" name="date_of_birth" id="date_of_birth" />
        </div>
    `
}

const getFormTemplate = (viewMode) => function(values) {
    console.log({values, viewMode})
    return `
        <div style="display: flex; justify-content: ${mapAlignment[values?.formAligment]}">
            
            <form class="custom-form" action="" style="width: ${values?.formAutoWidth ? 'auto' : `${values?.formWidth.value}%`}">
                ${values?.additional_form_fields.activeFields.map(field => additionalFieldsRenderer[field](values)).join('')}
                
                ${values?.email_phone == 'email' ? 
                `
                    <div style="margin-bottom: ${values.fieldsGap}px" class="custom-form__item">
                        ${values?.email_phone_props?.fieldProps?.label ? `<label style="font-family: ${values?.labelFont.value}; font-size: ${values?.labelFontSize}px; color: ${values?.labelColor}" for="email">${values?.email_phone_props?.fieldProps?.label_text}</label>` : ''}
                        <input required class="custom-form__field" placeholder="${values?.email_phone_props?.fieldProps?.placeholder_text}" type="email" name="email" id="email" />
                    </div>
                ` 
                : 
                `
                    <div style="margin-bottom: ${values.fieldsGap}px" class="custom-form__item custom-form__phone">
                        ${viewMode ? `
                        <style>
                            .custom-form__phone {
                              position: relative;
                              overflow: hidden;
                            }
                            .custom-form__phone::before {
                              content: '';
                              position: absolute;
                              left: 1px;
                              top: 1px;
                              bottom: 1px;
                              width: 50px;
                              border-radius: 8px 0 0 8px;
                              background-color: #f2f2f2;
                              background-image: url("https://mkravtsov03.github.io/screen.png");
                              background-size: contain;
                              background-repeat: no-repeat;
                              background-position: center center;
                            }
                            .custom-form__phone .custom-form__field {
                                padding-left: 55px;
                                outline: none;
                              }
                        </style>
                        ` : ''}
                        ${values?.email_phone_props?.fieldProps?.label ? `<label style="font-family: ${values?.labelFont.value}; font-size: ${values?.labelFontSize}px; color: ${values?.labelColor}" for="phone">${values?.email_phone_props?.fieldProps?.label_text}</label>` : ''}
                        <input required class="custom-form__field" placeholder="${values?.email_phone_props?.fieldProps?.placeholder_text}" type="tel" name="phone" id="phone" />
                    </div>
                `
                }
                <div  class="custom-form__item button-item" style="justify-content: ${mapAlignment[values?.btnAligment]}; margin-top: ${values.BtnGap}px; margin-bottom: ${values.fieldsGap}px">
                    <button class="custom-form__btn" style="
                                   font-family: ${values.btnFont.value};
                                   border-left: ${values.btnBorder.borderLeftWidth} ${values.btnBorder.borderLeftStyle} ${values.btnBorder.borderLeftColor}; 
                                   border-top: ${values.btnBorder.borderTopWidth} ${values.btnBorder.borderTopStyle} ${values.btnBorder.borderTopColor}; 
                                   border-right: ${values.btnBorder.borderRightWidth} ${values.btnBorder.borderRightStyle} ${values.btnBorder.borderRightColor}; 
                                   border-bottom: ${values.btnBorder.borderBottomWidth} ${values.btnBorder.borderBottomStyle} ${values.btnBorder.borderBottomColor}; 
                                   color: ${values.btnColor};
                                   font-size: ${values.btnFontSize}px; 
                                   background-color: ${values.btnBg};
                                   border-radius: ${values.btnCorners}px;
                                   padding: ${values.btnPadding}px;
                                   width: ${values?.btnAutoWidth ? 'auto' : `${values?.btnWidth.value}%`}">
                                ${values.btn}
                    </button>
                </div>
                
                ${
                    values?.legal_consent ? `
                        <label class="consent-check">
                            <input oninvalid="this.setCustomValidity('Please accept the terms to proceed')" oninput="this.setCustomValidity('')" required checked name="legal_consent" type="checkbox">
                            <span style="font-family: ${values?.consntLabelFont.value}; font-size: ${values?.consntLabelFontSize}px; color: ${values?.consntLabelColor}" >${values?.consent_label}</span>
                        </label>
                        <div style="color: ${values?.consntDescriptionColor}; font-size: ${values?.consntDescriptionFontSize}px; font-family: ${values?.consntDescriptionFont.value};">
                            ${values?.customDescription ? values?.customDescriptionContent : mapConsent[values?.legal_consent_type].description(values?.policyLink, values?.policyLinkColor)}
                        </div>
                    ` : ''
                }
                
            </form>
        </div>
    `
}

const formTemplate = getFormTemplate();

const formTemplateView = getFormTemplate(true);


unlayer.registerTool({
    name: 'form_tool',
    label: 'Form',
    icon: 'https://mkravtsov03.github.io/form-icon.svg',
    supportedDisplayModes: ['web', 'email', 'popup'],
    options: {
        layout: {
            title: 'Layout',
            position: 1,
            options: {
                formAutoWidth: {
                    label: 'Auto width',
                    defaultValue: true,
                    widget: 'toggle',
                },
                formAligment: {
                    label: 'Form alignment',
                    defaultValue: 'left',
                    widget: 'alignment'
                },
                formWidth: {
                    label: 'Button width',
                    defaultValue: {label: 'Form', value: '100'},
                    widget: 'width_range'
                },
                fieldsGap: {
                    enabled: true,
                    label: 'Space between fields',
                    defaultValue: '15',
                    widget: 'counter',
                },
                BtnGap: {
                    enabled: true,
                    label: 'Margin',
                    defaultValue: '15',
                    widget: 'counter',
                },
            }
        },
        input_fields: {
            title: 'Input Fields',
            position: 1,
            options: {
                additional_form_fields: {
                    defaultValue: {activeFields: [], editPopup: {active: false, field: 'first_name'},
                        fieldsProps: {
                            first_name: {
                                label: false, 
                                label_text: 'First Name',
                                placeholder_text: 'Enter your first name',
                                isRequired: false,
                            },
                            last_name: {
                                label: false,
                                label_text: 'Last Name',
                                placeholder_text: 'Enter your last name',
                                isRequired: false,
                            },
                            date_of_birth: {
                                label: false,
                                label_text: 'Date of Birth',
                                placeholder_text: '',
                                isRequired: false,
                            },
                        }
                    },
                    widget: 'additional_form_fields',
                },
                email_phone: {
                    label: 'Email/phone field',
                    defaultValue: 'email',
                    widget: 'dropdown',
                },
                email_phone_props: {
                    label: 'Email/phone field edit',
                    defaultValue: {
                        fieldProps: {
                                label: false,
                                label_text: 'Email',
                                placeholder_text: 'Enter your email'
                        },
                        editPopup: false
                    },
                    widget: 'emailPhoneEdit',
                },
                fieldsBorder: {
                    label: 'Fields border',
                    defaultValue: {
                        borderTopWidth: "1px",
                        borderTopStyle: "solid",
                        borderTopColor: "#ced4da",
                        borderLeftWidth: "1px",
                        borderLeftStyle: "solid",
                        borderLeftColor: "#ced4da",
                        borderRightWidth: "1px",
                        borderRightStyle: "solid",
                        borderRightColor: "#ced4da",
                        borderBottomWidth: "1px",
                        borderBottomStyle: "solid",
                        borderBottomColor: "#ced4da"
                    },
                    widget: 'border',
                },
                fieldsCorners: {
                    enabled: true,
                    label: 'Rounded border',
                    defaultValue: '8',
                    widget: 'counter',
                },
                fieldsPadding: {
                    enabled: true,
                    label: 'Padding',
                    defaultValue: '10',
                    widget: 'counter',
                },
                fieldsFontSize: {
                    enabled: true,
                    label: 'Font size',
                    defaultValue: '14',
                    widget: 'counter',
                },
                fieldsColor: {
                    enabled: true,
                    label: 'Text color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                fieldsBg: {
                    enabled: true,
                    label: 'Background',
                    defaultValue: '#fff',
                    widget: 'color_picker',
                },
            },
        },
        labels: {
            title: 'Labels',
            position: 2,
            options: {
                labelFont: {
                    label: 'Labels font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                labelFontSize: {
                    enabled: true,
                    label: 'Labels font size',
                    defaultValue: '14',
                    widget: 'counter',
                },
                labelColor: {
                    enabled: true,
                    label: 'Labels color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
            }
        },
        btn: {
            title: 'Button',
            position: 3,
            options: {
                btn: {
                    label: 'Button Content',
                    defaultValue: 'Submit',
                    widget: 'text',
                },
                btnFont: {
                    label: 'Button font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                btnFontSize: {
                    enabled: true,
                    label: 'Button font size',
                    defaultValue: '14',
                    widget: 'counter',
                },
                btnColor: {
                    enabled: true,
                    label: 'Button text color',
                    defaultValue: '#fff',
                    widget: 'color_picker',
                },
                btnBg: {
                    enabled: true,
                    label: 'Button  background color',
                    defaultValue: '#0b68ff',
                    widget: 'color_picker',
                },
                btnBorder: {
                    label: 'Button border',
                    defaultValue: {
                        borderTopWidth: "0px",
                        borderTopStyle: "solid",
                        borderTopColor: "#CCC",
                        borderLeftWidth: "0px",
                        borderLeftStyle: "solid",
                        borderLeftColor: "#CCC",
                        borderRightWidth: "0px",
                        borderRightStyle: "solid",
                        borderRightColor: "#CCC",
                        borderBottomWidth: "0px",
                        borderBottomStyle: "solid",
                        borderBottomColor: "#CCC"
                    },
                    widget: 'border',
                },
                btnCorners: {
                    enabled: true,
                    label: 'Rounded border',
                    defaultValue: '8',
                    widget: 'counter',
                },
                btnPadding: {
                    enabled: true,
                    label: 'Padding',
                    defaultValue: '10',
                    widget: 'counter',
                },
                btnAligment: {
                    label: 'Button alignment',
                    defaultValue: 'center',
                    widget: 'alignment'
                },
                btnAutoWidth: {
                    label: 'Auto width',
                    defaultValue: false,
                    widget: 'toggle',
                },
                btnWidth: {
                    label: 'Button width',
                    defaultValue: {label: 'Button', value: '100'},
                    widget: 'width_range'
                }
            }
        },
        consent: {
            title: 'Legal Consent',
            position: 4,
            options: {
                legal_consent: {
                    label: 'Legal Consent',
                    defaultValue: true,
                    widget: 'toggle',
                },
                legal_consent_type: {
                    label: 'Legal Consent Type',
                    defaultValue: 'gdpr',
                    widget: 'dropdown',
                },
                consent_label: {
                    label: 'Legal consent label text',
                    defaultValue: 'Keep me updated on the latest news & offers.',
                    widget: 'text',
                },
                policyLink: {
                    label: 'Privacy Policy link *',
                    defaultValue: '',
                    widget: 'text',
                },
                policyLinkColor: {
                    label: 'Privacy Policy link color',
                    defaultValue: '#0b68ff',
                    widget: 'color_picker',
                },
                customDescription: {
                    label: 'Legal Consent custom description',
                    defaultValue: false,
                    widget: 'toggle',
                },
                customDescriptionContent: {
                    label: 'Legal Consent custom description text',
                    defaultValue: '',
                    widget: 'rich_text',
                },
                consntLabelFont: {
                    label: 'Legal consent Font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                consntLabelFontSize: {
                    enabled: true,
                    label: 'Legal consent Font size',
                    defaultValue: '14',
                    widget: 'counter',
                },
                consntLabelColor: {
                    enabled: true,
                    label: 'Legal consent Font color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                consntDescriptionFont: {
                    label: 'Description font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                consntDescriptionFontSize: {
                    enabled: true,
                    label: 'Description font size',
                    defaultValue: '14',
                    widget: 'counter',
                },
                consntDescriptionColor: {
                    enabled: true,
                    label: 'Description color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
            }
        }

    },
    propertyStates: (values) => {
        let emailProps = {};
        let btnProps = {};
        let layoutProps = {};
        let consentProps = {};

        if (!values.email_phone_label) {
            emailProps = {
                email_phone_label_text: {
                    enabled: false
                }
            }
        }
        else {
            emailProps = {
                email_phone_label_text: {
                    enabled: true
                }
            }
        }
        if (values.btnAutoWidth) {
            btnProps = {
                btnWidth: {
                    enabled: false
                }
            }
        }
        else {
            btnProps = {
                btnWidth: {
                    enabled: true
                }
            }
        }
        if (values.formAutoWidth) {
            layoutProps = {
                formWidth: {
                    enabled: false
                }
            }
        }
        else {
            layoutProps = {
                formWidth: {
                    enabled: true
                }
            }
        }
        if (values.customDescription) {
            consentProps = {
                policyLink: {
                    enabled: false
                },
                customDescriptionContent: {
                    enabled: true
                },
                consntDescriptionColor: {
                    enabled: false
                }
            }
        }
        else {
            consentProps = {
                policyLink: {
                    enabled: true
                },
                customDescriptionContent: {
                    enabled: false
                },
                consntDescriptionColor: {
                    enabled: true
                }
            }
        }
        return {
            ...emailProps,
            ...btnProps,
            ...layoutProps,
            ...consentProps,
        }
    },
    transformer: (values, source) => {
        console.log({values, source})
        const { value, name } = source
        if (value == 'tcpa') {
            return {
                ...values,
                consent_label: 'Receive offers via text message.',
            }
        }
        if (value == 'gdpr') {
            return {
                ...values,
                consent_label: 'Keep me updated on the latest news & offers.',
            }
        }
        if (name == "email_phone") {
            if (value == 'phone') {
                return {
                    ...values,
                    email_phone_props: {
                        ...values.email_phone_props,
                        fieldProps: {
                            ...values.email_phone_props.fieldProps,
                            label_text: 'Phone',
                            placeholder_text: 'Enter your Number',
                        }
                    }
                }
            }
            return {
                ...values,
                email_phone_props: {
                    ...values.email_phone_props,
                    fieldProps: {
                        ...values.email_phone_props.fieldProps,
                        label_text: 'Email',
                        placeholder_text: 'Enter your email',
                    }
                }
            }
        }
        return values
    },
    renderer: {
        Viewer: unlayer.createViewer({
            render(values) {
                return formTemplateView(values);
            },
        }),
        exporters: {
            web: function (values) {
                return formTemplate(values);
            },
            email: function (values) {
                return formTemplate(values);
            },
        },
        head: {
            css: formStyles(),
            js: function (values) {},
        },
    },
});

//  Form tool ---- END ------------


//  Recomendations tool ---- start ------------


const getRecomendTemplate = () => function (values) {
    console.log(values)
    const acctiveLayout = values.layout.find(layout => layout.active)
    const productCardRenderer = () => `
            <span style="display: none;">$$</span>
                <table style="position: relative;
                            min-width: 0;
                            word-wrap: break-word;
                            background-color: #fff;
                            background-clip: border-box;
                            text-align: center;
                            margin-bottom: 24px;
                            border-radius: 12px;
                            width: 100%;">
                        <tbody>
                            <tr>
                                <td>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img alt="" style="max-width: 100%; margin-bottom: 15px; height: auto; display: ${values?.details?.details.image ? 'inline-block' : 'none'}" src="{{ recommendation_image }}" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table style="padding:15px 10px;width: 100%;">
                                        <tbody style="width: 100%">
                                            <tr style="width: 100%">
                                                <td id="product-inner-td" style="padding: 0 15px;">
                                                    <div style="font-family: ${values.titleFont.value}; font-size: ${values.titleFontSize}px; text-align: ${values.titleAligment}; color: ${values.titleColor}; font-weight: ${values.titleFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.titleFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.titleFontStyle.styles.underline.active ? 'underline' : 'none'}; margin-bottom: 15px; display: ${values?.details?.details.name ? 'block' : 'none'};">
                                                        {{ recommendation_title }}
                                                    </div>
                                                    <div style="font-family: ${values.priceFont.value}; font-size: ${values.priceFontSize}px; text-align: ${values.priceAligment}; color: ${values.priceColor}; font-weight: ${values.priceFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.priceFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.priceFontStyle.styles.underline.active ? 'underline' : 'none'}; word-break: break-all; margin-bottom: 15px; display: ${values?.details?.details.price ? 'block' : 'none'};">
                                                        {{ recommendation_price }}
                                                    </div>
                                                </td> 
                                            </tr>
                                            <tr>
                                                <td >
                                                    <div style="display: ${values?.details?.details.button ? 'block' : 'none'}; border-top: 1px solid #E4E7EC; padding: 15px; text-align: center;">
                                                        <a style="font-weight: 400;
                                                                  text-align: center;
                                                                  vertical-align: middle;
                                                                  border-radius: 8px;
                                                                  padding: 0.75rem;
                                                                  font-size: 1rem;
                                                                  line-height: 1.5;
                                                                  transition: color .15s ease-in-out,background-color .15s ease-in-out, border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                                                                  cursor: pointer;
                                                                  text-decoration: none;
                                                                  min-width: 105px;
                                                                  max-width: 100%;
                                                                  border-left: ${values.btnBorder.borderLeftWidth} ${values.btnBorder.borderLeftStyle} ${values.btnBorder.borderLeftColor}; 
                                                                  border-top: ${values.btnBorder.borderTopWidth} ${values.btnBorder.borderTopStyle} ${values.btnBorder.borderTopColor}; 
                                                                  border-right: ${values.btnBorder.borderRightWidth} ${values.btnBorder.borderRightStyle} ${values.btnBorder.borderRightColor}; 
                                                                  border-bottom: ${values.btnBorder.borderBottomWidth} ${values.btnBorder.borderBottomStyle} ${values.btnBorder.borderBottomColor}; 
                                                                  color: ${values.btnColor};
                                                                  font-size: ${values.btnFontSize}px; 
                                                                  background-color: ${values.btnBg};
                                                                  display: inline-block;"
                                                                  href="{{ recommendation_link }}" target="_blank">
                                                            ${values.btn}
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                </table>
             <span style="display: none;">$$</span>
        `;
    const productTwoColumnsCardRenderer = () => `
           <span style="display: none;">$$</span>
                 <div style="max-width: calc(50% - 12px); margin: 0 5px 10px; float: left; width: 100%;">
                    <table style="position: relative;
                                min-width: 0;
                                word-wrap: break-word;
                                background-color: #fff;
                                background-clip: border-box;
                                text-align: center;
                                margin-bottom: 24px;
                                border-radius: 12px;
                                width: 100%;">
                         <tbody>
                                    <tr>
                                        <td>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <img alt="" style="max-width: 100%; margin-bottom: 15px; height: auto; display: ${values?.details?.details.image ? 'inline-block' : 'none'}" src="{{ recommendation_image }}" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table style="padding:15px 10px;width: 100%;">
                                                <tbody style="width: 100%">
                                                    <tr style="width: 100%">
                                                        <td id="product-inner-td" style="padding: 0 15px;">
                                                            <div style="font-family: ${values.titleFont.value}; font-size: ${values.titleFontSize}px; text-align: ${values.titleAligment}; color: ${values.titleColor}; font-weight: ${values.titleFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.titleFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.titleFontStyle.styles.underline.active ? 'underline' : 'none'}; margin-bottom: 15px; display: ${values?.details?.details.name ? 'block' : 'none'};">
                                                                {{ recommendation_title }}
                                                            </div>
                                                            <div style="font-family: ${values.priceFont.value}; font-size: ${values.priceFontSize}px; text-align: ${values.priceAligment}; color: ${values.priceColor}; font-weight: ${values.priceFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.priceFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.priceFontStyle.styles.underline.active ? 'underline' : 'none'}; word-break: break-all; margin-bottom: 15px; display: ${values?.details?.details.price ? 'block' : 'none'};">
                                                                {{ recommendation_price }}
                                                            </div>
                                                        </td> 
                                                    </tr>
                                                     <tr>
                                                        <td >
                                                            <div style="display: ${values?.details?.details.button ? 'block' : 'none'}; border-top: 1px solid #E4E7EC; padding: 15px; text-align: center;">
                                                                <a style="font-weight: 400;
                                                                          text-align: center;
                                                                          vertical-align: middle;
                                                                          border-radius: 8px;
                                                                          padding: 0.75rem;
                                                                          font-size: 1rem;
                                                                          line-height: 1.5;
                                                                          transition: color .15s ease-in-out,background-color .15s ease-in-out, border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                                                                          cursor: pointer;
                                                                          text-decoration: none;
                                                                          min-width: 105px;
                                                                          max-width: 100%;
                                                                          border-left: ${values.btnBorder.borderLeftWidth} ${values.btnBorder.borderLeftStyle} ${values.btnBorder.borderLeftColor}; 
                                                                          border-top: ${values.btnBorder.borderTopWidth} ${values.btnBorder.borderTopStyle} ${values.btnBorder.borderTopColor}; 
                                                                          border-right: ${values.btnBorder.borderRightWidth} ${values.btnBorder.borderRightStyle} ${values.btnBorder.borderRightColor}; 
                                                                          border-bottom: ${values.btnBorder.borderBottomWidth} ${values.btnBorder.borderBottomStyle} ${values.btnBorder.borderBottomColor}; 
                                                                          color: ${values.btnColor};
                                                                          font-size: ${values.btnFontSize}px; 
                                                                          background-color: ${values.btnBg};
                                                                          display: inline-block;"
                                                                          href="{{ recommendation_link }}" target="_blank">
                                                                    ${values.btn}
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                    </table>
                </div>
            <span style="display: none;">$$</span>
        `;
    return `
        <div>
            <span data-count="&[${values.recommendationsCount}]&"></span>
            <span data-type="$[${values.recommendationsType}]$"></span>
            <div style="overflow: hidden;">
                ${acctiveLayout.value === 'two-columns' ? productTwoColumnsCardRenderer() : productCardRenderer()}
            </div>
        </div>
    `
}

const getRecomendTemplateViewer = () => function (values) {
    console.log(values)
    const acctiveLayout = values.layout.find(layout => layout.active)
    const productCardRenderer = () => `
                <table style="position: relative;
                            min-width: 0;
                            word-wrap: break-word;
                            background-color: #fff;
                            background-clip: border-box;
                            text-align: center;
                            margin-bottom: 24px;
                            border-radius: 12px;
                            width: 100%;">
                      <tbody>
                                <tr>
                                    <td>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img alt="" style="max-width: 100%; margin-bottom: 15px; height: auto; display: ${values?.details?.details.image ? 'inline-block' : 'none'}" src="https://storage.cloud.google.com/moda-platform-dev-us-central1-ui-connectors-icons/connector_icons/image/live/image_placeholder.svg?authuser=2" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table style="padding:15px 10px;width: 100%;">
                                            <tbody style="width: 100%">
                                                <tr style="width: 100%">
                                                    <td id="product-inner-td" style="padding: 0 15px;">
                                                        <div style="font-family: ${values.titleFont.value}; font-size: ${values.titleFontSize}px; text-align: ${values.titleAligment}; color: ${values.titleColor}; font-weight: ${values.titleFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.titleFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.titleFontStyle.styles.underline.active ? 'underline' : 'none'}; margin-bottom: 15px; display: ${values?.details?.details.name ? 'block' : 'none'};">
                                                            {{ recommendation_title }}
                                                        </div>
                                                        <div style="font-family: ${values.priceFont.value}; font-size: ${values.priceFontSize}px; text-align: ${values.priceAligment}; color: ${values.priceColor}; font-weight: ${values.priceFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.priceFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.priceFontStyle.styles.underline.active ? 'underline' : 'none'}; word-break: break-all; margin-bottom: 15px; display: ${values?.details?.details.price ? 'block' : 'none'};">
                                                            {{ recommendation_price }}
                                                        </div>
                                                    </td> 
                                                </tr>
                                                 <tr>
                                                    <td >
                                                        <div style="display: ${values?.details?.details.button ? 'block' : 'none'}; border-top: 1px solid #E4E7EC; padding: 15px; text-align: center;">
                                                            <a style="font-weight: 400;
                                                                      text-align: center;
                                                                      vertical-align: middle;
                                                                      border-radius: 8px;
                                                                      padding: 0.75rem;
                                                                      font-size: 1rem;
                                                                      line-height: 1.5;
                                                                      transition: color .15s ease-in-out,background-color .15s ease-in-out, border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                                                                      cursor: pointer;
                                                                      text-decoration: none;
                                                                      min-width: 105px;
                                                                      max-width: 100%;
                                                                      border-left: ${values.btnBorder.borderLeftWidth} ${values.btnBorder.borderLeftStyle} ${values.btnBorder.borderLeftColor}; 
                                                                      border-top: ${values.btnBorder.borderTopWidth} ${values.btnBorder.borderTopStyle} ${values.btnBorder.borderTopColor}; 
                                                                      border-right: ${values.btnBorder.borderRightWidth} ${values.btnBorder.borderRightStyle} ${values.btnBorder.borderRightColor}; 
                                                                      border-bottom: ${values.btnBorder.borderBottomWidth} ${values.btnBorder.borderBottomStyle} ${values.btnBorder.borderBottomColor}; 
                                                                      color: ${values.btnColor};
                                                                      font-size: ${values.btnFontSize}px; 
                                                                      background-color: ${values.btnBg};
                                                                      display: inline-block;"
                                                                      href="{{ recommendation_link }}" target="_blank">
                                                                ${values.btn}
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                </table>
        `;
    const productTwoColumnsCardRenderer = () => `
               <div style="max-width: calc(50% - 12px); margin: 0 5px 10px; float: left; width: 100%;">
                    <table style="position: relative;
                                min-width: 0;
                                word-wrap: break-word;
                                background-color: #fff;
                                background-clip: border-box;
                                text-align: center;
                                margin-bottom: 24px;
                                border-radius: 12px;
                                width: 100%;">
                          <tbody>
                                    <tr>
                                        <td>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <img alt="" style="max-width: 100%; margin-bottom: 15px; height: auto; display: ${values?.details?.details.image ? 'inline-block' : 'none'}" src="https://storage.cloud.google.com/moda-platform-dev-us-central1-ui-connectors-icons/connector_icons/image/live/image_placeholder.svg?authuser=2" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table style="padding:15px 10px;width: 100%;">
                                                <tbody style="width: 100%">
                                                    <tr style="width: 100%">
                                                        <td id="product-inner-td" style="padding: 0 15px;">
                                                            <div style="font-family: ${values.titleFont.value}; font-size: ${values.titleFontSize}px; text-align: ${values.titleAligment}; color: ${values.titleColor}; font-weight: ${values.titleFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.titleFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.titleFontStyle.styles.underline.active ? 'underline' : 'none'}; margin-bottom: 15px; display: ${values?.details?.details.name ? 'block' : 'none'};">
                                                                {{ recommendation_title }}
                                                            </div>
                                                            <div style="font-family: ${values.priceFont.value}; font-size: ${values.priceFontSize}px; text-align: ${values.priceAligment}; color: ${values.priceColor}; font-weight: ${values.priceFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.priceFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.priceFontStyle.styles.underline.active ? 'underline' : 'none'}; word-break: break-all; margin-bottom: 15px; display: ${values?.details?.details.price ? 'block' : 'none'};">
                                                                {{ recommendation_price }}
                                                            </div>
                                                        </td> 
                                                    </tr>
                                                     <tr>
                                                        <td >
                                                            <div style="display: ${values?.details?.details.button ? 'block' : 'none'}; border-top: 1px solid #E4E7EC; padding: 15px; text-align: center;">
                                                                <a style="font-weight: 400;
                                                                          text-align: center;
                                                                          vertical-align: middle;
                                                                          border-radius: 8px;
                                                                          padding: 0.75rem;
                                                                          font-size: 1rem;
                                                                          line-height: 1.5;
                                                                          transition: color .15s ease-in-out,background-color .15s ease-in-out, border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                                                                          cursor: pointer;
                                                                          text-decoration: none;
                                                                          min-width: 105px;
                                                                          max-width: 100%;
                                                                          border-left: ${values.btnBorder.borderLeftWidth} ${values.btnBorder.borderLeftStyle} ${values.btnBorder.borderLeftColor}; 
                                                                          border-top: ${values.btnBorder.borderTopWidth} ${values.btnBorder.borderTopStyle} ${values.btnBorder.borderTopColor}; 
                                                                          border-right: ${values.btnBorder.borderRightWidth} ${values.btnBorder.borderRightStyle} ${values.btnBorder.borderRightColor}; 
                                                                          border-bottom: ${values.btnBorder.borderBottomWidth} ${values.btnBorder.borderBottomStyle} ${values.btnBorder.borderBottomColor}; 
                                                                          color: ${values.btnColor};
                                                                          font-size: ${values.btnFontSize}px; 
                                                                          background-color: ${values.btnBg};
                                                                          display: inline-block;"
                                                                          href="{{ recommendation_link }}" target="_blank">
                                                                    ${values.btn}
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                    </table>
                </div>
        `;
    return `
        <div>
            <div style="overflow: hidden;">
                ${acctiveLayout.value === 'two-columns' ? productTwoColumnsCardRenderer() : productCardRenderer()}
            </div>
        </div>`
}

const recomendTemplate = getRecomendTemplate();

const recomendViewer = getRecomendTemplateViewer();

const recommendationsCount = (value) => {
    console.log(value)
    return `
         <div class="blockbuilder-widget-label">
            <p class="blockbuilder-label-primary">Number of Product Recommendations</p>
         </div>
         
         <div class="recomend-count">
            <label class="recomend-count-item">
                <input ${value == '1' ? 'checked' : ''} type="radio" name="recomend_count" value="1">
                <span>1</span>
            </label>
            <label class="recomend-count-item">
                <input ${value == '2' ? 'checked' : ''} type="radio" name="recomend_count" value="2">
                <span>2</span>
            </label>
            <label class="recomend-count-item">
                <input ${value == '3' ? 'checked' : ''} type="radio" name="recomend_count" value="3">
                <span>3</span>
            </label>
            <label class="recomend-count-item">
                <input ${value == '4' ? 'checked' : ''} type="radio" name="recomend_count" value="4">
                <span>4</span>
            </label>
            <label class="recomend-count-item">
                <input ${value == '5' ? 'checked' : ''} type="radio" name="recomend_count" value="5">
                <span>5</span>
            </label>
            <label class="recomend-count-item">
                <input ${value == '6' ? 'checked' : ''} type="radio" name="recomend_count" value="6">
                <span>6</span>
            </label>
         </div>
    `
}

unlayer.registerPropertyEditor({
    name: 'recommendationsCount',
    layout: 'bottom',
    Widget: unlayer.createWidget({
        render( value, updateValue, data) {
            return recommendationsCount(value)
        },
        mount(node, value, updateValue) {
            node.querySelectorAll("input[name='recomend_count']").forEach((input) => {
                input.addEventListener('change', function() {
                    updateValue(this.value);
                });
            });
        }
    })
});

unlayer.registerTool({
    name: 'recommendations_tool',
    label: 'Recommendations',
    icon: 'https://mkravtsov03.github.io/recommendations.svg',
    supportedDisplayModes: ['web', 'email', 'popup'],
    options: {
        recomendations: {
            title: 'Recommendations',
            position: 1,
            options: {
                recommendationsCount: {
                    label: 'Number of Product Recommendations',
                    defaultValue: '1',
                    widget: 'recommendationsCount',
                },
                recommendationsType: {
                    label: 'Type of Recommendation',
                    defaultValue: 'related',
                    widget: 'dropdown',
                },
                layout: {
                    label: 'Layout',
                    defaultValue: [
                        {active: true, value: 'one-column', disabled: false},
                        {active: false, value: 'two-columns', disabled: false},
                    ],
                    widget: 'layout',
                },
                details: {
                    label: 'Details',
                    defaultValue: {title: 'recomendation', details: {name: true, price: false, button: true, image: true}},
                    widget: 'product_details',
                },
                titleFont: {
                    label: 'Product title font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                titleFontSize: {
                    enabled: true,
                    label: 'Product title font size',
                    defaultValue: '18',
                    widget: 'counter',
                },
                titleFontStyle: {
                    enabled: true,
                    label: 'Product title font style',
                    defaultValue: {
                        label: 'Title Font style',
                        styles: {
                            bold: {
                                active: true,
                                value: 'bold'
                            },
                            italic: {
                                active: false,
                                value: 'italic'
                            },
                            underline: {
                                active: false,
                                value: 'underline'
                            }
                        }
                    },
                    widget: 'title_font_styles',
                },
                titleColor: {
                    enabled: true,
                    label: 'Product title color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                titleAligment: {
                    enabled: true,
                    label: 'Product title aligment',
                    defaultValue: 'left',
                    widget: 'alignment',
                },
                priceFont: {
                    label: 'Price font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                priceFontStyle: {
                    enabled: true,
                    label: 'Price font style',
                    defaultValue: {
                        label: 'Price Font style',
                        styles: {
                            bold: {
                                active: false,
                                value: 'bold'
                            },
                            italic: {
                                active: false,
                                value: 'italic'
                            },
                            underline: {
                                active: false,
                                value: 'underline'
                            }
                        }
                    },
                    widget: 'title_font_styles',
                },
                priceFontSize: {
                    enabled: true,
                    label: 'Price font size',
                    defaultValue: '14',
                    widget: 'counter',
                },
                priceColor: {
                    enabled: false,
                    label: 'Price color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                priceAligment: {
                    enabled: true,
                    label: 'Price aligment',
                    defaultValue: 'left',
                    widget: 'alignment',
                },
                btn: {
                    label: 'Button Content',
                    defaultValue: 'Buy it Now',
                    widget: 'text',
                },
                btnFontSize: {
                    enabled: true,
                    label: 'Button font size',
                    defaultValue: '14',
                    widget: 'counter',
                },
                btnColor: {
                    enabled: true,
                    label: 'Button color',
                    defaultValue: '#fff',
                    widget: 'color_picker',
                },
                btnBg: {
                    enabled: true,
                    label: 'Button  background color',
                    defaultValue: '#0B68FF',
                    widget: 'color_picker',
                },
                btnBorder: {
                    label: 'Button border',
                    defaultValue: '',
                    widget: 'border',
                },
            },
        },
    },
    propertyStates: (values) => {
        let titleProps = {};
        let priceProps = {};
        let btnProps = {};
        if (!values.details.details.name) {
            titleProps = {
                titleFont: {
                    enabled: false
                },
                titleFontSize: {
                    enabled: false
                },
                titleColor: {
                    enabled: false
                },
                titleAligment: {
                    enabled: false
                },
                titleFontStyle: {
                    enabled: false
                }
            }
        }
        else {
            titleProps = {
                titleFont: {
                    enabled: true
                },
                titleFontSize: {
                    enabled: true
                },
                titleColor: {
                    enabled: true
                },
                titleAligment: {
                    enabled: true
                },
                titleFontStyle: {
                    enabled: true
                }
            }
        }
        if (!values.details.details.price) {
            priceProps = {
                titleFont: {
                    enabled: false
                },
                priceFontSize: {
                    enabled: false
                },
                priceColor: {
                    enabled: false
                },
                priceAligment: {
                    enabled: false
                },
                priceFontStyle: {
                    enabled: false
                }
            }
        }
        else {
            priceProps = {
                titleFont: {
                    enabled: true
                },
                priceFontSize: {
                    enabled: true
                },
                priceColor: {
                    enabled: true
                },
                priceAligment: {
                    enabled: true
                },
                priceFontStyle: {
                    enabled: true
                }
            }
        }
        if (!values.details.details.button) {
            btnProps = {
                btn: {
                    enabled: false
                },
                btnFontSize: {
                    enabled: false
                },
                btnColor: {
                    enabled: false
                },
                btnBg: {
                    enabled: false
                },
                btnBorder: {
                    enabled: false
                }
            }
        }
        else {
            btnProps = {
                btn: {
                    enabled: true
                },
                btnFontSize: {
                    enabled: true
                },
                btnColor: {
                    enabled: true
                },
                btnBg: {
                    enabled: true
                },
                btnBorder: {
                    enabled: true
                }
            }
        }
        return {
            ...titleProps,
            ...priceProps,
            ...btnProps,
        }
    },
    renderer: {
        Viewer: unlayer.createViewer({
            render(values) {
                return recomendViewer(values);
            },
        }),
        exporters: {
            web: function (values) {
                return recomendTemplate(values);
            },
            email: function (values) {
                return recomendTemplate(values);
            },
        },
        head: {
            css: ProductStyles(),
            js: function (values) {},
        },
    },
});

//
// 'custom#recommendations_tool': {
//     properties: {
//         recommendationsType: {
//             editor: {
//                 data: {
//                     options: [
//                         {
//                             value: 'related',
//                             label: 'Related recommendations',
//                         },
//                         {
//                             value: 'bestsellers',
//                             label: 'Bestsellers',
//                         },
//                         {
//                             value: 'viewed',
//                             label: 'Most viewed',
//                         },
//                     ],
//                 },
//             },
//         },
//     },
// },


//  Recomendations tool ---- end ------------
